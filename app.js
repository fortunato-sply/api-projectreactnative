const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Transaction } = require('./schemas/Transaction');

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(cors());
app.use(jsonParser);
app.use(express.json());
app.use(urlencodedParser);


app.get('/', async (req, res) => {
  const resp = await Transaction.find()

  res.send(resp)
})

app.get('/delete', async (req, res) => {
  const resp = await Transaction.deleteMany()
  res.send(resp)
})

app.get('/deleteByRef/:ref', async (req, res) => {
  const resp = await Transaction.deleteOne({
    reference: req.params.ref
  })

  res.send(resp)
})

app.post('/add', urlencodedParser, async (req, res) => {
  console.log(req.body);

  await Transaction.create({ 
    reference: req.body.reference,
    value: parseInt(req.body.value),
    date: req.body.date
   })

  res.send("criado")
})

app.get('/deleteByTransaction', async (req, res) => {
  const resp = await Transaction.deleteOne(
    req.body
  )

  res.send(resp)
})

// app.get('/', async(req, res) => {
//     await Transaction.create({
//       date: new Date().toString(),
//       reference: 'req.params.ref#2',
//       value: 125.20
//     })

//     res.send("HELLO")
// })

app.post('/sendTransaction', async(req, res) => {
  const data = req.body;

  await Transaction.create({
    date: data.date,
    reference: data.reference,
    value: data.value
  })

  res.send("CRIADO\N" + data);
})

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

const port = 3000
const serverInit = async() => {
  await mongoose.connect('mongodb+srv://fortunatosply:lucas2530@project-reactnative.9zvf7gc.mongodb.net/?retryWrites=true&w=majority');

  app.listen(port, async() => {
    console.log("fuguete")
  })
}

serverInit();