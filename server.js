const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json())

const users = [
    { id: 1, username: 'admin', password: '123' },
    { id: 2, username: 'user', password: '456' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password || username.includes(';') || password.includes(';')) {
        return res.status(400).json({ error: 'Entrada inválida' });
    }

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Credenciais incorretas' });
    }

    res.status(200).json({ message: 'Seu login realizado com sucesso!' });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});