// Rutas de usuarios / Auth
const {Router} = require('express')
const {check} = require('express-validator')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')
const router = Router()



router.post(
    '/new', 
    [ // middlewares

    ] ,
    crearUsuario)


router.post('/', loginUsuario)


router.get('/renew', revalidarToken)


module.exports = router