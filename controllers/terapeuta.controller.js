const { response } = require("express");
const Usuario = require("../models/Usuario");

// exports.crearPaciente = async (req, res) => {
//   try {
//     let usuario;
//     //Creamos nuestro usuario
//     usuario = new Usuario(req.body);

//     await usuario.save();
//     res.send(usuario);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Hubo un error");
//   }
// };



// exports.actualizarUsuario = async (req,res) => {
//     try {
//         const {usuario, password, activo} = req.body;
//         let user = await Usuario.findById(req.params.id);

//         if(!user){
//             res.status(404).json({msg: 'No existe el usuario'});
//         }

//         user.usuario = usuario;
//         user.password = password;
//         user.activo = activo;

//         user = await Usuario.findOneAndUpdate({_id: req.params.id}, user, {new:true})
//         res.json(user);
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Hubo un error");
//     }
// }
// exports.obtenerUsuario = async (req, res) => {
//     try {
//         let user = await Usuario.findById(req.params.id);
//         if(!user){
//             res.status(404).json({msg: 'No existe el usuario'});
//         }
//         res.json(user)
//     } catch (error) {
//       console.log(error);
//       res.status(500).send("Hubo un error");
//     }
//   };
  exports.obtenerTerapeutas = async(req,res) => {
    try {
      
      const terapeutas = await Usuario.find(
        {
          'usuario_rol.desRol':"Terapeuta"
        }
      ).sort({activo:-1});
    res.json(terapeutas)
    }catch(error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  }
  exports.obtenerTerapeutasActivos = async(req,res) => {
    try {
      
      const terapeutas = await Usuario.find(
        {
          'usuario_rol.desRol':"Terapeuta",
           activo: "S"
        }
      ).sort({activo:-1});
    res.json(terapeutas)
    }catch(error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  }