const Hello = require('../models/hello')

async function getHelloData () {
  const hellos = await Hello.find()
  const randomIndex = Math.floor(Math.random() * hellos.length)
  return hellos[randomIndex].HelloString
}

async function addHelloData (newHelloString) {
  try {
    const newSchema = new Hello({ HelloString: newHelloString });
    await newSchema.save();
  } catch (error) {
    throw error
  }
};

module.exports = { getHelloData, addHelloData }