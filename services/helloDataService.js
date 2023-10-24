const Hello = require('../models/hello')

async function getHelloData () {
    const hellos = await Hello.find()
    const randomIndex = Math.floor(Math.random() * hellos.length)
    return hellos[randomIndex].HelloString
  }

  function addHelloData (newHelloString){
    const newSchema = new Hello({HelloString: newHelloString});
    newSchema.save();
  };
  module.exports = { getHelloData, addHelloData }