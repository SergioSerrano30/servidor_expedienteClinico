//2
const { response } = require("express");
const Consulta = require("../models/consulta");

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
          numConsulta,descripcion,ejerciciosCasa,estatus
        } = req.body;
        
        let con = await Consulta.findById(req.params.id);
        console.log(con)

        if(!con){
            res.status(404).json({msg: 'No existe la Consulta'});
        }  

        con.descripcion = descripcion;
        con.numConsulta = numConsulta;
        con.ejerciciosCasa=ejerciciosCasa;
        con.estatus = estatus;
        
        con = await Consulta.findOneAndUpdate({_id: req.params.id}, con, {new:true})
        res.json(con);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error en 'ActualizarConsulta'");
    }
}



exports.obtenerConsulta= async (req, res) => {
    try {
      let type = req.params.type;
      let id = req.params.id;
      let his = ""
      //console.log(id)
      //console.log(type)
      if(type == "Consulta"){
        his = await Consulta.findById(id);
        if(!his){
            res.status(404).json({msg: 'No existe la consulta '});
        } 
        //res.json(his)
      }else if(type == "Historia_Activas"){
        his = await Consulta.find({
          idHistoria: id,
          estatus: "A"
        });
        //res.json(his);
      }
      else if(type == "Historia_Ocultas"){
        his = await Consulta.find({
          idHistoria: id,
          estatus: "N"
        });
        //res.json(his);
      }
      else if("Terapeuta"){
        his = await Consulta.find({
          usuarios_idUsuario: id
        }).sort({fechaRegistro: -1});
        
      }else{
        res.status(500).send("Hubo un error en 'ObtenerConsulta'");
      } 

      if(his==""){
        res.status(404).json({ msg: "No existe la consulta" });
      }else{
        res.json(his);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error en 'ObtenerConsulta'");
    }
  };

 
