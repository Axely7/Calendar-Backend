const { request, response } = require("express")

const getEventos = async (req = request, res = response) => {
    try {

        return res.status(200).json({
            ok: true,
            msg: 'obteniendo eventos'
        })


        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener eventos'
        })
    }
}

const crearEvento = async (req = request, res = response) => {
    try {

        return res.status(201).json({
            ok: true,
            msg: 'Crear evento'
        })
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error a crear evento'
        })
    }
}


const actualizarEvento = async (req = request, res = response) => {
    try {

        return res.status(200).json({
            ok: true,
            msg: 'Actualizando evento'
        })
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error actualizando evento'
        })
    }
}

const eliminarEvento = async (req = request, res = response) => {
    try {

        return res.status(200).json({
            ok: true,
            msg: 'Evento eliminado'
        })
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'error eliminando evento'
        })
    }
}




module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}