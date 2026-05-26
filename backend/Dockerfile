FROM node:18-alpine

WORKDIR /app

# 1. Copiar los archivos de configuración del backend
COPY package*.json ./

# 2. Instalar dependencias
RUN npm install

# 3. Copiar todo el código del backend actual
COPY . .

# 4. Crear la carpeta 'public' manualmente dentro del contenedor
RUN mkdir -p public

# 5. Descargar tu index.html directamente desde tu propio GitHub para no renegar con carpetas padres
ADD https://raw.githubusercontent.com/MRobotLily/ruleta-cloud/main/frontend/index.html ./public/index.html

# 6. Exponer el puerto de Render
EXPOSE 10000

CMD ["node", "server.js"]
