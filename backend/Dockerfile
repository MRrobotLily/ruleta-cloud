FROM node:18-alpine

WORKDIR /app

# 1. Copiar archivos de dependencias del backend
COPY package*.json ./
RUN npm install

# 2. Copiar todo el contenido del backend
COPY . .

# 3. Crear la carpeta pública si no existe
RUN mkdir -p public

# 4. En lugar de buscar carpetas padres complicadas, 
# Render descarga todo el repositorio en el contenedor durante la construcción.
# Buscamos el index.html en la raíz del espacio de trabajo de Render:
COPY ../frontend/index.html ./public/index.html

EXPOSE 10000
CMD ["node", "server.js"]
