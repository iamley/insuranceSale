FROM nginx:1.18

LABEL app="mfe-vehicle-insurance"

COPY ./dist/apps/vehicle-insurance-website /usr/share/nginx/html
COPY ./nginx-default.conf /etc/nginx/conf.d/default.conf