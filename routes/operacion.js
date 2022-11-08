//4 Rutas para operacion

const express = require('express');
const router = express.Router();

const operacionController = require('../controllers/operacion.controller');

//api/operaciones

router.post('/', operacionController.crearOperacion);
router.get('/', operacionController.obtenerOperaciones);
router.put('/:id', operacionController.actualizarOperacion);
router.get('/:type/:nombre',operacionController.obtenerOpePorTipo);
router.get('/:id', operacionController.obtenerOperacion);




module.exports = router;