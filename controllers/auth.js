const {response, request} = require('express')

const crearUsuario = (req = request, res = response) => {
    
    const {name, email, password} = req.body;
    
    res.json({
        ok: true,
        msg: 'registro',
        name, 
        email,
        password
    })
}


const loginUsuario = (req = request, res = response) => {
   
    const {name, email, password} = req.body;
    
    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}


const revalidarToken = (req, res = response) => {
    console.log('Se requiere el /')
    res.json({
        ok: true,
        msg: 'renew'
    })
}




module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}