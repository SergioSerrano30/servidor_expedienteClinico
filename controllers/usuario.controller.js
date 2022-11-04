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

//Zambrano
exports.actualizarUsuario = async (req, res) => {
  try {
    const { usuario, password, activo } = req.body;

    const { nombre, apPaterno, apMaterno, fechaNac, sexo } =
      req.body.usuario_persona;
    const {
      calle,
      colonia,
      numero_EXT,
      numero_INT,
      entrecalle1,
      entrecalle2,
      referencia,
      pais,
      estado,
      municipio,
    } = req.body.usuario_persona.persona_domicilio;

    let user = await Usuario.findById(req.params.id);
    console.log(user);

    if (!user) {
      res.status(404).json({ msg: "No existe el usuario" });
    }

    user.usuario = usuario;
    user.password = password;
    user.activo = activo;
    user.usuario_persona.apPaterno = apPaterno;
    user.usuario_persona.apMaterno = apMaterno;
    user.usuario_persona.fechaNac = fechaNac;
    user.usuario_persona.sexo = sexo;
    user.usuario_persona.nombre = nombre;
    user.usuario_persona.persona_domicilio.calle = calle;
    user.usuario_persona.persona_domicilio.numero_EXT = numero_EXT;
    user.usuario_persona.persona_domicilio.numero_INT = numero_INT;
    user.usuario_persona.persona_domicilio.colonia = colonia;
    user.usuario_persona.persona_domicilio.entrecalle1 = entrecalle1;
    user.usuario_persona.persona_domicilio.entrecalle2 = entrecalle2;
    user.usuario_persona.persona_domicilio.referencia = referencia;
    user.usuario_persona.persona_domicilio.pais = pais;
    user.usuario_persona.persona_domicilio.estado = estado;
    user.usuario_persona.persona_domicilio.municipio = municipio;

    user = await Usuario.findOneAndUpdate({ _id: req.params.id }, user, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
exports.obtenerUsuario = async (req, res) => {
  try {
    let user = await Usuario.findById(req.params.id);
    if (!user) {
      res.status(404).json({ msg: "No existe el usuario" });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerPacientePorNombre = async (req, res) => {
  try {
    let nombre = req.params.nombre;
    let type = req.params.type;
    if (type === "nombre") {
      console.log("Entrando")
      const usuarios = await Usuario.find({
        "usuario_persona.nombre": { $regex: nombre, $options: "i" },
        'usuario_rol.desRol':"Paciente"
      });
      res.json(usuarios);
    }
    else{
      res.json([]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerPacientes = async (req, res) => {
  try {
    //   const usuarios = await Usuario.find(
    //     {
    //       // usuario: "sergio"
    //       'usuario_rol.desRol':"Paciente"
    //     }
    //   );
    // res.json(usuarios);
    res.json(req.params.id);
  } catch (error) {
    console.log(error);
    res.status(500).send("xxHubo un error");
  }
};
