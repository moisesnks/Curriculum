# Usa una imagen base con soporte para servidor web
FROM nginx:alpine

# Copia todos los archivos al directorio de trabajo en la imagen
COPY . /usr/share/nginx/html/
