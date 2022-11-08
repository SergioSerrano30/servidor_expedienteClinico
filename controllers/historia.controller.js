//2
const { response } = require("express");
const Historia = require("../models/Historia");

exports.crearHistoria = async (req, res) => {
  try {
    let historia;
    historia = new Historia(req.body);
    await historia.save();
    res.send(historia);
  } catch (error) {
      console.log(error);
    res.status(500).send("Hubo un error en 'crear historia'");
  }
};

exports.obtenerHistorias = async (req, res) => {
  try {
    const historias = await Historia.find();
    res.json(historias);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en 'obtenerHistorias'");
  }
};


exports.actualizarHistoria = async (req,res) => {
    try {
        const {
        fechaRegistro,edad,peso,estatura,emeNombre,emeParentesco,emeCelular,alergias,cirugia,traumasFracturas,emeCongenitas,otros,observaciones,numConsultasTotales
        } = req.body;
        
        let his = await Historia.findById(req.params.id);
        console.log(his)

        if(!his){
            res.status(404).json({msg: 'No existe la Historia'});
        }  

        his.fechaRegistro = fechaRegistro;
        his.edad = edad;
        his.peso = peso;
        his.estatura = estatura;
        his.emeNombre = emeNombre;
        his.emeParentesco = emeParentesco;
        his.emeCelular = emeCelular;
        his.alergias = alergias;
        his.cirugia = cirugia;
        his.traumasFracturas = traumasFracturas;
        his.emeCongenitas = emeCongenitas;
        his.otros = otros;
        his.observaciones = observaciones;
        his.numConsultasTotales=numConsultasTotales;

        
        his = await Historia.findOneAndUpdate({_id: req.params.id}, his, {new:true})
        res.json(his);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error en 'ActualizarHistoria'");
    }
}



exports.obtenerHistoria= async (req, res) => {
    try {
        let his = await Historia.findById(req.params.id);
        if(!his){
            res.status(404).json({msg: 'No existe la historia '});
        }
        res.json(his)
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error en 'ObtenerHistoria'");
    }
  };

 
