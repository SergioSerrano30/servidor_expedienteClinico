//Rutas para persona
const express = require('express');
const router = express.Router();

const personaController = require('../controllers/persona.controller');

//api/personas
router.post('/', personaController.crearPersona);
router.get('/', personaController.obtenerPersonas); //Todas
router.put('/:id', personaController.actualizarPersona); 
router.get('/:id', personaController.obtenerPersona);//Una persona por id


module.exports = router;