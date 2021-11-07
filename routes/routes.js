import express from 'express'
import { ingresar, municipio } from '../controllers/authController.js'
import con from '../database/connection.js'
const router = express.Router() 

var clientes
var municipios

router.get('/', (req,res) => {
    res.render('ingresar')
})

router.get('/municipio', (req,res) => {
    res.render('municipio')
})

// traer clientes de la base de datos
router.get('/verClientes', (req, res) => { 
    con.query('SELECT * FROM cliente ', async(err, result) => {

        if (err) {
            clientes = []
            console.log('Ocurrio un error al consultar el cliente',err)
            return
        }
        else{
            clientes = result    
        }
        console.log(clientes);
    
    res.render('verClientes', {
        data: result
    })

    })
})

// traer municipios de la base de datos
router.get('/verMunicipios', (req, res) => { 
    con.query('SELECT * FROM municipio ', async(err, result) => {

        if (err) {
            municipios = []
            console.log('Ocurrio un error al consultar el municipio',err)
            return
        }
        else{
            municipios = result    
        }
        console.log(municipios);
    
    res.render('verMunicipios', {
        data: result
    })

    })
})

// editar clientes ya ingresados
router.get('/modificarClientes:id', async(req, res) => { 
    const id=req.params.id
    console.log(id);
    con.query('SELECT * FROM cliente WHERE id = ?', id, (err, result) => {

        if (err) {
            console.log('Ocurrio un error al consultar el cliente',err)
            return
        }
        console.log(result);
        res.render('/modificarClientes',{
            data: result[0]
        })
    })
})

// editar clientes ya ingresados
router.get('/modificarClientes:id', async(req, res) => { 
    const id=req.params.id
    console.log(id);
    con.query('SELECT * FROM cliente WHERE id = ?', id, (err, result) => {

        if (err) {
            console.log('Ocurrio un error al consultar el cliente',err)
            return
        }
        console.log(result);
        res.render('/modificarClientes',{
            data: result[0]
        })
    })
})

// eliminar clientes
router.get('/eliminarCliente/:id', (req, res) => {
    const id = req.params.id 
    con.query('DELETE FROM cliente WHERE id = ? ', id, async(err, result) => {
        if (err) {
            console.log('Ocurrio un error al eliminar el cliente',err)
            return
        }    
    res.redirect('/verClientes')

    })
})

// eliminar municipios
router.get('/eliminarMunicipio/:id', (req, res) => {
    const id = req.params.id 
    con.query('DELETE FROM municipio WHERE id = ? ', id, async(err, result) => {
        if (err) {
            console.log('Ocurrio un error al eliminar el munipio',err)
            return
        }    
    res.redirect('/verMunicipios')

    })
})

router.post('/ingresar', ingresar)
router.post('/municipio', municipio)

export default router