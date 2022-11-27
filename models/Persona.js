const mongoose = require("mongoose");

const PersonaSchema = mongoose.Schema({
  idPersona_PK: {
    type: Number,
    requiere: true,
  },
  nombre: {
    type: String,
    requiere: true,
  },
  apPaterno: {
    type: String,
    requiere: true,
  },
  apMaterno: {
    type: String,
    requiere: true,
  },
  fechaNac: {
    type: String,
    requiere: true,
  },
  sexo: {
    type: String,
    requiere: true,
  },
  nombreTutor: {
    type: String,
    requiere: true,
  },
  apPaternoTutor: {
    type: String,
    requiere: true,
  },
  apMaternoTutor: {
    type: String,
    requiere: true,
  },
  fechaNacTutor: {
    type: String,
    requiere: true,
  },
  sexoTutor: {
    type: String,
    requiere: true,
  },
  telefonoTutor: {
    type: String,
    requiere: true,
  },
  parentesco: {
    type: String,
    requiere: true,
  },
  persona_domicilio: {
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
  },
});
module.exports = mongoose.model('Persona',PersonaSchema);
