const express = require('express');
const app = express();
const port = 3001;

app.use(express.json()); // Para interpretar JSON

app.get('/', (req, res) => {
    res.send('Hello World from Node.js!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});