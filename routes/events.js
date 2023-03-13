const {Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();


// Toda tienen que pasar por la validacion
// obtener eventos

router.get('/', getEventos);

router.use(validarJWT) // a todas las peticiones por debajo de esta linea se aplica el middleware


router.post('/', crearEvento);

router.put('/:id', actualizarEvento)

router.delete('/:id', eliminarEvento)

module.exports = router