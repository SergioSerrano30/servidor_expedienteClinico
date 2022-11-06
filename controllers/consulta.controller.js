//2
const { response } = require("express");
const Consulta = require("../models/Consulta");

exports.crearConsulta = async (req, res) => {
  try {
    let consulta;
    consulta = new Consulta(req.body);
    await consulta.save();
    res.send(consulta);
  } catch (error) {
      console.log(error);
    res.status(500).send("Hubo un error en 'crear consulta'");
  }
};

exports.obtenerConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.find();
    res.json(consultas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en 'obtenerConsultas'");
  }
};


exports.actualizarConsulta = async (req,res) => {
    try {
        const {
          numConsulta,descripcion,ejerciciosCasa
        } = req.body;
        
        let con = await Consulta.findById(req.params.id);
        console.log(con)

        if(!con){
            res.status(404).json({msg: 'No existe la Consulta'});
        }  

        con.descripcion = descripcion;
        con.numConsulta = numConsulta;
        con.ejerciciosCasa=ejerciciosCasa;
        
        con = await Consulta.findOneAndUpdate({_id: req.params.id}, con, {new:true})
        res.json(con);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error en 'ActualizarConsulta'");
    }
}



exports.obtenerConsulta= async (req, res) => {
    try {
        let his = await Consulta.findById(req.params.id);
        if(!his){
            res.status(404).json({msg: 'No existe la consulta '});
        }
        res.json(his)
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error en 'ObtenerConsulta'");
    }
  };

 
