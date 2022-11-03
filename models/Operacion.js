//1
const mongoose = require("mongoose");

const OperacionSchema = mongoose.Schema({
    idOperacion_PK: {
      type: String,
      requiere: true,
    },
    fechaRegistro: {
      type: String,
      requiere: true,
    },
    hora: {
      type: String,
      requiere: true,
    },
    tipoOperacion: {
      type: String,
      requiere: true,
    },
    usuario_idUsuario: {
      type: String,
      requiere: true,
    },
});
module.exports = mongoose.model('Operaciones',OperacionSchema);
