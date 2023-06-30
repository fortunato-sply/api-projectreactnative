const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  value: {
    type: 'Number',
    required: true
  },
  reference: {
    type: 'String',
    required: true
  },
  date: {
    type: 'String',
    required: true
  }
})

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = { Transaction };
