const {response, request} = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const crearUsuario = async (req = request, res = response) => {
    
    const {email, password} = req.body;

    try {
        let user = await User.findOne({email})
       if(user){
        return res.status(400).json({
            ok: false,
            msg: 'Un usuario existe con ese correo'
        })
       }
        user = new User(req.body);

        // encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save()
        
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

   
}


const loginUsuario = async (req = request, res = response) => {
   
    const {email, password} = req.body;


    try {

        const user = await User.findOne({email})
        if(!user){
         return res.status(400).json({
             ok: false,
             msg: 'El usuario no existe'
         })
        }

        // Confirmar passwords
        const validPassword = bcrypt.compareSync(password, user.password)

        if(!validPassword){
            res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            })
        }

        // Generar JWT
        res.status(200).json({
            ok: true,
            uid: user.id,
            name: user.name
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
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