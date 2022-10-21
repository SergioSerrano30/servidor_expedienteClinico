const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
  idUsuario_PK: {
    type: Number,
    require: true,
  },
  usuario: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  activo: {
    type: String,
    require: true,
  },
  usuario_rol: [
    {
      idRol_PK: {
        type: Number,
        require: true,
      },
      desRol: {
        type: String,
        require: true,
      },
    },
  ],
  usuario_persona: [
    {
      idPersona_PK: {
        type: Number,
        require: true,
      },
      nombre: {
        type: String,
        require: true,
      },
      apPaterno: {
        type: String,
        require: true,
      },
      apMaterno: {
        type: String,
        require: true,
      },
      fechaNac: {
        type: String,
        require: true,
      },
      sexo: {
        type: String,
        require: true,
      },
      persona_domicilio: [
        {
          idDomicilio_PK: {
            type: Number,
            require: true,
          },
          calle: {
            type: String,
            require: true,
          },
          numero_EXT: {
            type: String,
            require: true,
          },
          numero_INT: {
            type: String,
            require: true,
          },
          colonia: {
            type: String,
            require: true,
          },
          entrecalle1: {
            type: String,
            require: true,
          },
          entrecalle2: {
            type: String,
            require: true,
          },
          referencia: {
            type: String,
            require: true,
          },
          pais: {
            type: String,
            require: true,
          },
          estado: {
            type: String,
            require: true,
          },
          municipio: {
            type: String,
            require: true,
          },
        },
      ],
    },
  ],
});
module.exports = mongoose.model('Usuario', UsuarioSchema);