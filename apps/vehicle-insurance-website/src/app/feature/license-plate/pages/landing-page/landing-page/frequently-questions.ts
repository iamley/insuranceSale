import { FrequentlyQuestion } from "@vehicle-insurance-website/ui/frequently-question-group/frequently-question";

export const FREQUENTLY_QUESTIONS: FrequentlyQuestion[] = [
    {
        question: 'Si pago con la boleta Entel, ¿cuándo me llega el cobro?',
        answerTemplate: '<p>El cobro será facturado en la boleta del mes siguiente, considerando que estos cobros son los del mes actual.</p>'
    },
    {
        question: '¿Dónde llamo si tengo problemas con el pago o emisión de mi SOAP?',
        answerTemplate: '<p>Contáctate a nuestra casilla de correo <a href="mailto:contacto_seguros@entel.cl">contacto_seguros@entel.cl</a>, donde un ejecutivo se podrá en contacto contigo.</p>'
    },
    {
        question: '¿Cómo re-imprimo mi póliza?',
        answerTemplate: '<p>Ingresa la patente en este mismo sitio, luego haz clic en “Descarga tu póliza”.</p>'
    },
    {
        question: '¿Puedo pagar con mis puntos Entel?',
        answerTemplate: '<p>Si, debes seguir el proceso de compra hasta llegar a la selección de método de pago, ahí selecciona pago con puntos y sigue las instrucciones!</p>'
    },
    {
        question: '¿Cómo se cuántos puntos tengo?',
        answerTemplate: '<p>Sólo debes seguir el proceso de compra de tu SOAP hasta llegar a la selección de método de pago. Ahí seleccionas pago con puntos, en el caso de que no tengas los puntos suficientes te mostraremos cuál es tu saldo y si deseas pagar la diferencia con algún otro método de pago. Además recuerda que también puedes revisar tus puntos disponibles en Mi entel en la sección Club Entel.</p>'
    },
    {
        question: '¿Quién lo debe contratar?',
        answerTemplate: `
              <p>El SOAP debe ser contratado, sin excepción, por todo dueño de un vehículo ya sea automóvil, motocicleta, casa rodante, remolque, etc. Es obligatorio.</p>
              <p>Es pre-requisito para acceder a documentos exigidos por la ley como el permiso de circulación.</p>
        `
    },
    {
        question: '¿Qué montos cubre el SOAP?',
        answerTemplate: `
            <ul class="item__list">
               <li>Fallecimiento 300 UF</li>
               <li>Incapacidad Permanente Total 300 UF</li>
               <li>Incapacidad Permanente Parcial 200 UF</li>
               <li>Gastos Médicos y hospitalarios 300 UF</li>
            </ul>
            <p>Las coberturas no son acumulables, por ejemplo, en caso de que se hubiera pagado una indemnización por un tipo de incapacidad y luego la persona falleciera o cambiara su tipo de incapacidad solo se pagará hasta un máximo de 300 UF.</p>
    `
    },
    {
        question: '¿A quién cubre el Seguro SOAP?',
        answerTemplate: '<p>Conductor del vehículo, todas las personas transportadas en el vehículo, terceros que hayan sido afectados con responsabilidad del vehículo protegido.</p>'
    },
    {
        question: '¿Qué debo hacer para activar mi SOAP en caso de necesitarlo?',
        answerTemplate: `
        <p>Para activar tu SOAP, al momento de sufrir un accidente de tránsito e ir a algún servicio de urgencia se debe declarar de forma clara y muy especifica que esto ocurrió en un accidente de tránsito, para que no exista confusión o nieguen el uso del SOAP.</p>
        <p>Debes estar atento a la patente del vehículo involucrado, el SOAP requiere la denuncia en Carabineros con todos los hechos. Específicamente en la comuna donde ocurrió.</p>
        <p>Debes solicitar un certificado del accidente al juzgado de policía local o fiscalía para presentar a compañía de seguros y hacer uso de tu SOAP.</p>
        <p>Presentar la solicitud en las oficinas de la aseguradora, adjuntando Certificado otorgado por el Tribunal competente o el Ministerio Público para el cobro del SOAP.</p>
        <p>Es importante guardar toda boleta o comprobante asociado a tus gastos médicos, ya que al momento de cobrar tu seguro estos serán solicitados, junto con los documentos antes indicados.</p>
        <span>En caso de:</span>
        <p>Fallecimiento se debe presentar certificado de defunción y libreta de familia u otro documento que acredite legalmente la calidad de beneficiario.</p>
        <p>Incapacidad permanente debes presentar certificado entregado por médico tratante que acredite la incapacidad (naturaleza y grado).</p>
        <p>Gastos médicos presentar comprobantes de pago, junto con órdenes medicas de exámenes y/o tratamientos y recetas de medicamentos.</p>
`
    },
    {
        question: '¿Quiénes pueden cobrar el SOAP?',
        answerTemplate: `
        <p>Conyugue sobreviviente, los hijos, los padres y conviviente</p>
        <p>A falta de las personas antes indicadas, la indemnización corresponderá a quien acredite la calidad de heredero.</p>
    `
    },
    {
        question: '¿Cuáles son los derechos del cliente con SOAP vigente?',
        answerTemplate: `
        <p>El derecho a reembolsar gastos médicos a través del SOAP hasta el nivel 3 de libre elección de Fonasa.</p>
        <p>El derecho al seguro de trayecto cuando el trabajador/a sufre accidente del tránsito.</p>
        <p>El seguro escolar cuando el estudiante sufre accidente de tránsito.</p>
        <p>El derecho del accidentado a realizar demanda de indemnización de perjuicios en los tribunales civiles a través de un abogado.</p>
    `
    }
];
