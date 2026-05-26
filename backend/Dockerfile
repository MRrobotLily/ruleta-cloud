FROM node:18-alpine

WORKDIR /app

# 1. Copiar archivos de dependencias del backend e instalar
COPY package*.json ./
RUN npm install

# 2. Copiar todo el código de tu backend
COPY . .

# 3. Crear la carpeta pública donde Express busca el HTML
RUN mkdir -p public

# 4. TRUCO DE CONSTRUCCIÓN: 
# En lugar de usar rutas relativas hacia atrás (../) que Docker bloquea,
# le decimos a Docker que descargue tu HTML usando el comando nativo de Linux
# desde la URL oficial "raw" de tu repositorio público de GitHub:
RUN apt-get update && apt-get install -y curl || apk add --no-curl curl
RUN curl -fLo ./public/index.html https://raw.githubusercontent.com/MRobotLily/ruleta-cloud/main/frontend/index.html

EXPOSE 10000
CMD ["node", "server.js"]
