const mongoose = require('mongoose')

const AppealSchema = mongoose.Schema({
  data: {
    type: String,
    default: new Date().toLocaleString()
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  problem: {
    type: String,
    required: false
  }
})

const Appeal = mongoose.model('Appeal', AppealSchema)

module.exports = Appeal