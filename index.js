const express = require('express');
const { dbConnection } = require('./db/config');
const cors = require('cors');
require('dotenv').config();


const app = express();

// DB
dbConnection();

// CORS
app.use(cors())

// Directorio publico
app.use(express.static('public'))


// Lectura y parseo del body
app.use(express.json())



app.use('/api/auth', require('./routes/auth'))




app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})