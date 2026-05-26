const express = require('express');
const cors = require('cors');
const path = require('path'); // <-- 1. IMPORTANTE: Añade esta librería nativa de Node

const app = express();

app.use(cors());
app.use(express.json());

// <-- 2. CORRECCIÓN DE LA RUTA ESTÁTICA -->
// En Docker, es mucho más seguro usar rutas absolutas con __dirname para que no se pierda
app.use(express.static(path.join(__dirname, 'public')));

let resultados = [];

app.post('/guardar', (req, res) => {
    resultados.push(req.body);
    console.log(resultados);
    res.json({
        mensaje: "resultado guardado"
    });
});

app.get('/resultados', (req, res) => {
    res.json(resultados);
});

// <-- 3. CAMBIO DE PUERTO PARA RENDER -->
// Render exige que tu aplicación escuche en el puerto 10000 o mediante process.env.PORT
const PORT = process.env.PORT || 10000;

// Quitamos el '0.0.0.0' explícito de aquí, ya que Render gestiona la interfaz de red internamente
app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});
