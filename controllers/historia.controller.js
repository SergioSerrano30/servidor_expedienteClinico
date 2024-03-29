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

exports.actualizarHistoria = async (req, res) => {
  try {
    const {
      problematica,
      fecRegistro,
      peso,
      estatura,
      emeNombre,
      emeParentesco,
      emeCelular,
      alergias,
      cirugias,
      traFracturas,
      enfCongenitas,
      enfHereditarias,
      otros,
      observaciones,
      numConsultasTotales,
      estatus,
    } = req.body;

    let his = await Historia.findById(req.params.id);

    if (!his) {
      res.status(404).json({ msg: "No existe la Historia" });
    }

    his.problematica = problematica;
    his.fecRegistro = fecRegistro;
    his.peso = peso;
    his.estatura = estatura;
    his.emeNombre = emeNombre;
    his.emeParentesco = emeParentesco;
    his.emeCelular = emeCelular;
    his.alergias = alergias;
    his.cirugias = cirugias;
    his.traFracturas = traFracturas;
    his.enfCongenitas = enfCongenitas;
    his.enfHereditarias = enfHereditarias;
    his.otros = otros;
    his.observaciones = observaciones;
    his.numConsultasTotales = numConsultasTotales;
    his.estatus = estatus;

    his = await Historia.findOneAndUpdate({ _id: req.params.id }, his, {
      new: true,
    });
    res.json(his);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en 'ActualizarHistoria'");
  }
};

exports.obtenerHistoria = async (req, res) => {
  try {
    let his = await Historia.findById(req.params.id);
    if (!his) {
      res.status(404).json({ msg: "No existe la historia " });
    }
    res.json(his);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en 'ObtenerHistoria'");
  }
};

exports.obtenerHistoriasDePaciente = async (req, res) => {
  try {
    let id = req.params.id
    let type = req.params.type
    let nombre = req.params.nombre;
    if(type == "Historia"){
      let his = await Historia.findById(id);
      if (!his) {
        res.status(404).json({ msg: "No existe la historia " });
      }
      res.json(his);
    }else if(type == "Paciente_Activas"){
      let his = await Historia.find({
        usuarios_idPaciente: id,
        estatus: "A"
      });
      res.json(his);
    }
    else if(type == "Paciente_Ocultas"){
      let his = await Historia.find({
        usuarios_idPaciente: id,
        estatus: "N"
      });
      res.json(his);
    }
    else if(type == "Paciente_Activas_Nombre"){
      let his = await Historia.find({
        
        usuarios_idPaciente: id,
        estatus: "A",
        problematica: { $regex: nombre, $options: "i" },
      });
      res.json(his);
    }else{
      res.json([])
    }

  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en 'ObtenerHistoriaDePaciente'");
  }
};
