const mongoose = require('mongoose')
require('dotenv').config()

const DB_USER =  process.env.DB_USER
const DB_PASS =  process.env.DB_PASS
const DB_HOST =  process.env.DB_HOST
const DB_NAME =  process.env.DB_NAME

function main() {
    mongoose.connect(`mongodb+srv://PedroLucas40028922:eog8AcSM1RVfCaVI@cluster0028922.opxfsfy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0028922`)
    .then(() => console.log("Conectado ao banco MongoDB!"))
    .catch(err => console.log("Erro ao conectar ao banco Mongo: ", err))
}

module.exports = main