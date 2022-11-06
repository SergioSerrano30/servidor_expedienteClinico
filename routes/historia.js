//Final: 4  -- Rutas para historia

const express = require('express');
const router = express.Router();

const historiaController = require('../controllers/historia.controller');

//api/historia

router.post('/', historiaController.crearHistoria);
router.get('/', historiaController.obtenerHistorias);
router.put('/:id', historiaController.actualizarHistoria);
router.get('/:id', historiaController.obtenerHistoria);



module.exports = router;