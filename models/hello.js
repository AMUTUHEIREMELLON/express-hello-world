const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HelloSchema = new Schema({
  id: { type: Number },
  HelloString: { type: String },
})

module.exports = mongoose.model('Hello', HelloSchema)