const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("HELLO")
})

app.get('/transactions', (req, res) => {
    // orm chamando a tabela de transacoes
    const arrTransactions = [
        {
          amount: 2500,
          reference: 'Transacao 1',
          date: new Date(),
          currency: 'USD'
        },
        {
          amount: 12500,
          reference: 'Curso de programacao pro renato66',
          date: new Date(),
          currency: 'BRL'
        },
        {
          amount: 3500,
          reference: 'Mercado caro',
          date: new Date(),
          currency: 'USD'
        },
        {
          amount: 7500,
          reference: 'Adaptador usb c hdmi que nao funciona',
          date: new Date(),
          currency: 'EUR'
        },
        {
          amount: 9500,
          reference: 'Transacao 1',
          date: new Date(),
          currency: 'EUR'
        },
        {
          amount: 2500,
          reference: 'AIRBNB GmbH',
          date: new Date(),
          currency: 'USD'
        },
        {
          amount: 600,
          reference: 'Senai',
          date: new Date(),
          currency: 'USD'
        }
    ]

    res.json(arrTransactions)
})

const port = 3000
app.listen(port, () => {
    console.log("fuguete")
})
