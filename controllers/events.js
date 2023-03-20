const { request, response } = require("express")
const Evento = require('../models/Event')

const getEventos = async (req = request, res = response) => {
    
    try {
        const eventos = await Evento.find().populate('user', 'name');
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

    const eventoID = req.params.id;
    const uid = req.uid

    try {

        const evento = await Evento.findById(eventoID)

        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            })
        }

        console.log(evento.user)

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            })
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoID, nuevoEvento, {new: true})

        return res.status(200).json({
            ok: true,
            evento: eventoActualizado
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error actualizando evento'
        })
    }
}

const eliminarEvento = async (req = request, res = response) => {


    const eventoID = req.params.id;
    const uid = req.uid

    try {

        const evento = await Evento.findById(eventoID)

        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe con este id'
            })
        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'No tienes privilegio para eliminar este evento'
            })
        }

       await Evento.findByIdAndDelete(eventoID)

         return res.status(200).json({
            ok: true
        })
        
    } catch (error) {
        console.log(error)
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