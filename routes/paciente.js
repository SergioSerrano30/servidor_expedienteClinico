//Rutas para usuario
const express = require('express');
const router = express.Router();

const pacienteController = require('../controllers/paciente.controller');

//api/usuarios

// router.post('/', pacienteController.crearPaciente);
// router.put('/:id', pacienteController.actualizarPaciente);
// router.get('/:id', pacienteController.obtenerPaciente);
router.get('/',pacienteController.obtenerPacientes);
router.get('/activos',pacienteController.obtenerPacientesActivos);


module.exports = router;