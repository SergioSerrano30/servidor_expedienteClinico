//Rutas para persona
const express = require('express');
const router = express.Router();

const domicilioController = require('../controllers/domicilio.controller');

//api/personas
router.post('/', domicilioController.crearDomicilio);
router.get('/', domicilioController.obtenerDomicilios); //Todas
router.put('/:id', domicilioController.actualizarDomicilio); 
router.get('/:id', domicilioController.obtenerDomicilio);//Un domicilio por id


module.exports = router;