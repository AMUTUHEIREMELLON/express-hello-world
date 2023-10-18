require('dotenv').config();
const mongoDB = process.env.DB_CONNECTION_STRING
const mongoose = require('mongoose');
console.log(mongoDB);
async function main() {
    try {
      await mongoose.connect(mongoDB, { dbName: 'Hello-Express' })
      console.log('Connected to MongoDB')
    } catch (error) {
      console.log('Error connecting to MongoDB', error)
    }
  }

  main().catch((err) => console.error(err))