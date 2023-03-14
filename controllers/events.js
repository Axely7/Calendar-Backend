const { request, response } = require("express")
const Evento = require('../models/Event')

const getEventos = async (req = request, res = response) => {
    
    try {
        const eventos = await Evento.find();
        res.status(200).json({
            ok: true,
            eventos
        })


        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener eventos'
        })
    }
}

const crearEvento = async (req = request, res = response) => {
    const evento = new Evento(req.body)

    try {

        evento.user = req.uid;

        const eventDB = await evento.save()

        res.status(201).json({
            ok: true,
            msg: eventDB
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
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