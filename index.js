const express = require('express');
const app = express();
const path = require('path');
let avaliacoes = [
{id: 1, desc: "Amei a Pagina!"},
{id: 2, desc: "Parabéns :)"}

];
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', async (req,res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/saibamais', async (req,res) => {
    res.sendFile(path.join(__dirname, 'src', 'saibamais.html'));
});


app.get('/avaliacao', (req, res) => {
    res.json(avaliacoes);

});

app.post('/avaliacao', (req,res)=>{
    const novo={id: avaliacoes.length +1, desc: req.body.av};
    avaliacoes.push(novo);
    res.status(201).json(novo);
});

app.listen(8081, () => {
    console.log('Servidor iniciado na porta 8081: http://localhost:8081');
});