/*import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import promisify from 'util' */
import con from '../database/connection.js'

export const ingresar = async (req, res) => {
    const { nombre, apellido, direccion, telefono } = req.body

    const data = {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono: telefono
    }

    con.query('INSERT INTO cliente SET ? ', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }
        res.redirect('/')
    })
}

export const municipio = async (req, res) => {
    const { municipio, departamento } = req.body

    const data = {
        municipio: municipio,
        departamento: departamento
    }

    con.query('INSERT INTO municipio SET ? ', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }
        res.redirect('/verMunicipio')
    })
}