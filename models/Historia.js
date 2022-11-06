//1
const mongoose = require("mongoose");

const HistoriaSchema = mongoose.Schema({
    idHistoria_PK: {
      type: Number,
      requiere: true,
    },
    fechaRegistro: {
      type: String,
      requiere: true,
    },
    fechaNacimiento: {
      type: String,
      requiere: true,
    },
    edad: {
      type: String,
      requiere: true,
    },
    peso: {
      type: String,
      requiere: true,
    },
    estatura: {
      type: String,
      requiere: true,
    },
    emeNombre: {
      type: String,
      requiere: true,
    },
    emeParentesco: {
      type: String,
      requiere: true,
    },
    emeCelular: {
      type: String,
      requiere: true,
    },
    alergias: {
      type: String,
      requiere: true,
    },
    cirugias: {
      type: String,
      requiere: true,
    },
    traumasFracturas: {
      type: String,
      requiere: true,
    },
    enfCongenitas: {
      type: String,
      requiere: true,
    },
    enfHereditarias: {
      type: String,
      requiere: true,
    },
    otros: {
      type: String,
      requiere: true,
    },
    observaciones: {
      type: String,
      requiere: true,
    },
    numConsultasTotales: {
      type: String,
      requiere: true,
    },
    usuario_idUsuario: {
      type: String,
      requiere: true,
    },
    persona_idPersona: {
      type: String,
      requiere: true,
    },
});
module.exports = mongoose.model('Historias',HistoriaSchema);
