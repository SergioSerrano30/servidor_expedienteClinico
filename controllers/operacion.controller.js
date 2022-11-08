//2
const { response } = require("express");
const Operacion = require("../models/Operacion");

exports.crearOperacion = async (req, res) => {
  try {
    let operacion;
    operacion = new Operacion(req.body);
    await operacion.save();
    res.send(operacion);
  } catch (error) {
      console.log(error);
    res.status(500).send("Hubo un error en 'crear operacion'");
  }
};

exports.obtenerOperaciones = async (req, res) => {
  try {
    const operaciones = await Operacion.find().sort({fechaRegistro: -1, hora:-1});
    res.json(operaciones);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en 'obtenerOperaciones'");
  }
};
exports.obtenerOpePorTipo = async (req, res) => {
  try {
    let nombre = req.params.nombre;
    console.log(nombre)
    let type = req.params.type;
    console.log(type)
    if (type === "operacion") {
      console.log("entrando")
    const operaciones = await Operacion.find({
      "tipoOperacion": {$regex:nombre, $options:"i"}
    }).sort({fechaRegistro: -1, hora:-1});
    console.log(operaciones)
    res.json(operaciones);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en 'obtenerOperaciones por Tipo'");
  }
};


exports.actualizarOperacion = async (req,res) => {
    try {
        const {
          fechaRegistro,hora,tipoOperacion,usuarios_idUsuarios
        } = req.body;
        
        let op = await Operacion.findById(req.params.id);
        console.log(op)

        if(!op){
            res.status(404).json({msg: 'No existe la Operacion'});
        }  

        op.fechaRegistro = fechaRegistro;
        op.hora = hora;
        op.tipoOperacion = tipoOperacion;
        op.usuarios_idUsuarios=usuarios_idUsuarios;
        
        op = await Operacion.findOneAndUpdate({_id: req.params.id}, op, {new:true})
        res.json(op);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error en 'ActualizarOperacion'");
    }
}

exports.obtenerOperacion= async (req, res) => {
    try {
        let op = await Operacion.findById(req.params.id);
        if(!op){
            res.status(404).json({msg: 'No existe la operacion '});
        }
        res.json(op)
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error en 'ObtenerOperacion'");
    }
  };
