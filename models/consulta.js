//1
const mongoose = require("mongoose");

const ConsultaSchema = mongoose.Schema({
    idConsulta_Paciente: {
      type: String,
      requiere: true,
    },
    idConsulta_PacientePK: {
      type: String,
      requiere: true,
    },
    numConsulta: {
      type: String,
      requiere: true,
    },
    descripcion: {
      type: String,
      requiere: true,
    },
    ejerciciosCasa: {
      type: String,
      requiere: true,
    },
    fechaRegistro: {
      type: String,
      requiere: true,
    },
    horaRegistro: {
      type: String,
      requiere: true,
    },
    idHistoria: {
      type: String,
      requiere: true,
    },
    usuarios_idUsuario: {
      type: String,
      requiere: true,
    },
});
module.exports = mongoose.model('Consultas',ConsultaSchema);
