const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let resultados = [];

app.post('/guardar', (req,res)=>{

    resultados.push(req.body);

    console.log(resultados);

    res.json({
        mensaje:"resultado guardado"
    });

});

app.get('/resultados',(req,res)=>{

    res.json(resultados);

});

app.listen(3001, ()=>{

    console.log("Servidor corriendo");

});
