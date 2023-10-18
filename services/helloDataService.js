const Hello = require('../models/hello')

async function getHelloData () {
    const hellos = await Hello.find()
    const randomIndex = Math.floor(Math.random() * hellos.length)
    return hellos[randomIndex].HelloString
  }

  module.exports = { getHelloData }