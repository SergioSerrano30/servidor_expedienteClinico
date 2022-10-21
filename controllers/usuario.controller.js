const { response } = require("express");
const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) => {
  try {
    let usuario;
    //Creamos nuestro usuario
    usuario = new Usuario(req.body);

    await usuario.save();
    res.send(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.actualizarUsuario = async (req,res) => {
    try {
        const {usuario, password, activo} = req.body;
        let user = await Usuario.findById(req.params.id);

        if(!user){
            res.status(404).json({msg: 'No existe el usuario'});
        }

        user.usuario = usuario;
        user.password = password;
        user.activo = activo;

        user = await Usuario.findOneAndUpdate({_id: req.params.id}, user, {new:true})
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
exports.obtenerUsuario = async (req, res) => {
    try {
        let user = await Usuario.findById(req.params.id);
        if(!user){
            res.status(404).json({msg: 'No existe el usuario'});
        }
        res.json(user)
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  };