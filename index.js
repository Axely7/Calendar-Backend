const express = require('express')
require('dotenv').config();


const app = express()

// Directorio publico
app.use(express.static('public'))


// Lectura y parseo del body
app.use(express.json())



app.use('/api/auth', require('./routes/auth'))




app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})