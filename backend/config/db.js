const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/validaciones')

const bd = mongoose.connection

bd.on('connected', ()=>{console.log('Conexión exitosa a MongoDb')})
bd.on('error', ()=>{console.log('Error en la conexión a MongoDb')})

module.exports = mongoose