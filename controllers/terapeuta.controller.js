const { response } = require("express");
const Usuario = require("../models/Usuario");

  exports.obtenerTerapeutas = async(req,res) => {
    try {
      
      const terapeutas = await Usuario.find(
        {
          'usuario_rol.desRol':"Terapeuta"
        }
      ).sort({activo:-1});
    res.json(terapeutas)
    }catch(error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  }
  exports.obtenerTerapeutasActivos = async(req,res) => {
    try {
      
      const terapeutas = await Usuario.find(
        {
          'usuario_rol.desRol':"Terapeuta",
           activo: "S"
        }
      ).sort({activo:-1});
    res.json(terapeutas)
    }catch(error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  }