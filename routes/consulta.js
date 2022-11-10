//3  -- Rutas para consulta

const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consulta.controller');

//api/consulta
router.post('/', consultaController.crearConsulta);
router.get('/', consultaController.obtenerConsultas);
router.put('/:id', consultaController.actualizarConsulta);
router.get('/:type/:id', consultaController.obtenerConsulta);

module.exports = router;