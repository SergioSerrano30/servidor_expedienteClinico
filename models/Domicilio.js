const mongoose = require("mongoose");

const PersonaSchema = mongoose.Schema({
    idDomicilio_PK: {
      type: Number,
      requiere: true,
    },
    calle: {
      type: String,
      requiere: true,
    },
    numero_EXT: {
      type: String,
      requiere: true,
    },
    numero_INT: {
      type: String,
      requiere: true,
    },
    colonia: {
      type: String,
      requiere: true,
    },
    entrecalle1: {
      type: String,
      requiere: true,
    },
    entrecalle2: {
      type: String,
      requiere: true,
    },
    referencia: {
      type: String,
      requiere: true,
    },
    pais: {
      type: String,
      requiere: true,
    },
    estado: {
      type: String,
      requiere: true,
    },
    municipio: {
      type: String,
      requiere: true,
    },
});
module.exports = mongoose.model('Domicilio',PersonaSchema);
