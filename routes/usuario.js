//Rutas para usuario
const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario.controller');

//api/usuarios

router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuarios);
router.put('/:id', usuarioController.actualizarUsuario);
router.get('/:type/:nombre',usuarioController.obtenerPacientePorNombre);
router.get('/:id', usuarioController.obtenerUsuario);




module.exports = router;