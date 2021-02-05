pipeline {
    options {
        timeout(time: 30, unit: 'MINUTES')
        timestamps()
        ansiColor('xterm')
        disableConcurrentBuilds()
    }
    agent {
        kubernetes{
        label 'nodejs'
        defaultContainer 'nodejs'
        }
    }
    stages {
      stage('set Enviroment') {
        steps {
          script{
            VERSION =sh label: 'getVersion', returnStdout: true, script: 'grep version package.json |cut -d ":" -f "2" |tr -d \'\\n ",\''

            // Manejo de version en jenkins
            GIT_COMMIT_SHORT = sh(
              script: "printf \$(git rev-parse --short ${GIT_COMMIT})",
              returnStdout: true
            )
	          VERSION += '-' + BRANCH_NAME + '-' + GIT_COMMIT_SHORT
            env.GIT_COMMIT_SHORT = GIT_COMMIT_SHORT
            env.VERSION = VERSION
            env.APP_NAME=JOB_NAME.split('/')[-2]
            env.PROJECT_NAME=JOB_NAME.split('/')[-3].toLowerCase()
            println "version = ${VERSION}"
          }
        }
      }

      stage('Build') {
        steps {

          sh "npm install -g @angular/cli"
          sh "npm install"
            script {
              if (BRANCH_NAME == "master" || (env.CHANGE_TARGET && CHANGE_TARGET == "master")) {
                println "Branch es considerado master"
                sh 'ng build --configuration=production'
              }
              else if (BRANCH_NAME == "release") {
                println "Branch es release"
                sh 'ng build --configuration=qa'
              }
              else {
                println "branch considerado develop"
                sh 'ng build --configuration=develop'
              }
            }
        }
      }

      stage('Sonar') {
        steps {
          println "Analizando con sonarqube plugin"
            script{
              withSonarQubeEnv(credentialsId: 'sonar') {
                sh "npm run sonar -- -Dsonar.projectKey=${APP_NAME}"
              }
            }
        }
      }

      stage('Dependecy Track') {
        steps {
          println "Chequeando Dependency Track"
          sh "npm run cyclone"
          script{
              projectName = "${PROJECT_NAME}-${APP_NAME}"
              dependencyTrackPublisher artifact: 'bom.xml', projectName: "${projectName}", projectVersion: "${VERSION}", synchronous: true
          }
        }
      }

      stage('Publish') {
          environment {
              ARTIFACTORY = credentials('artifactory')
          }
          steps {
              sh "tar -cvzf ${APP_NAME}-${VERSION}.tgz dist"
              sh "curl -u $ARTIFACTORY -X PUT $ARTIFACTORY_PUBLISH_URL/${PROJECT_NAME}/${APP_NAME}/${VERSION}/${APP_NAME}-${VERSION}.tgz -T ${APP_NAME}-${VERSION}.tgz"
              script {
                  currentBuild.description = "${APP_NAME}-${VERSION}"
              }
          }
      }

      stage('build/push image') {
        steps {
          println "Dockerizar y subir Aplicación"
          script {
            currentBuild.description ="${REGISTRY}/${PROJECT_NAME}/${APP_NAME}:${VERSION}"
          }
          container(name: 'kaniko') {
              sh '''
              echo "Dockerizando"
              echo "${PROJECT_NAME},${VERSION}"
              /kaniko/executor --dockerfile `pwd`/Dockerfile --context `pwd` --destination=${REGISTRY}/${PROJECT_NAME}/${APP_NAME}:${VERSION} --verbosity=debug
              '''
          }
        }
      }

      stage('Deploy') {
        steps {
          println "Deploy"
          build job: "devops/deploy-k8s/develop",
            parameters: [
                text(name: 'image', value: "${REGISTRY}/${PROJECT_NAME}/${APP_NAME}:${VERSION}"),
                booleanParam(name: 'dryRun', value: false)
                ]
        }
      }
    }
    post {
      always {
        cleanWs()
      }
    }
}
