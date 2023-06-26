const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
//Importar la conexión
const conexionbd = require('./config/db')

//Importación del archivo de rutas
const rutaCliente = require('./routes/ClienteRoutes')
const rutaPlandepago = require('./routes/PlandepagoRoutes')
const rutaProducto = require('./routes/ProductoRoutes')
const rutaNegociacion = require('./routes/NegociacionRoutes')

//Importación del body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/cliente', rutaCliente)
app.use('/api/plandepago', rutaPlandepago)
app.use('/api/producto', rutaProducto)
app.use('/api/negociacion', rutaNegociacion)

app.get('/', (req, res) => {
    res.end('Bienvenido al servidor')
})

app.listen(4000, function(){
    console.log('El servidor está corriendo correctamente')
})