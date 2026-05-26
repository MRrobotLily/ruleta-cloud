FROM node:18-alpine

WORKDIR /app

# Copiar archivos del backend usando su ruta real
COPY backend/package*.json ./
RUN npm install

# Copiar todo el repositorio dentro del contenedor
COPY . .

# Mover los archivos del backend a la raíz de trabajo del contenedor
RUN cp -r backend/* . && rm -rf backend

# Crear la carpeta public si no existe y meter el HTML directamente
RUN mkdir -p public
RUN cp frontend/index.html ./public/index.html

EXPOSE 10000
CMD ["node", "server.js"]
