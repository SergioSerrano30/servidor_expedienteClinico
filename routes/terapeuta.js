//4 Rutas para usuario
const express = require('express');
const router = express.Router();

const terapeutaController = require('../controllers/terapeuta.controller');

//api/usuarios

// router.post('/', pacienteController.crearPaciente);
// router.put('/:id', pacienteController.actualizarPaciente);
// router.get('/:id', pacienteController.obtenerPaciente);
router.get('/',terapeutaController.obtenerTerapeutas);
router.get('/activos',terapeutaController.obtenerTerapeutasActivos);


module.exports = router;