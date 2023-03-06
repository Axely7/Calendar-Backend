const {response, request} = require('express')
const User = require('../models/User')

const crearUsuario = async (req = request, res = response) => {
    
    const {email, password} = req.body;

    try {
        let user = await User.findOne({email})
        console.log(user)
        // const user = new User(req.body);

        // await user.save()
        
        res.status(201).json({
            ok: true,
            msg: 'registro',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

   
}


const loginUsuario = (req = request, res = response) => {
   
    const {email, password} = req.body;
    
    res.status(200).json({
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