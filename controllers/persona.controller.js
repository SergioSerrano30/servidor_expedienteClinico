const { response } = require("express");
const Persona = require("../models/Persona");

exports.crearPersona = async (req, res) => {
  try {
    let persona;
    //Creamos nuestra persona
    persona = new Persona(req.body);

    await persona.save();
    res.send(persona);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
exports.obtenerPersonas = async (req, res) => {
    try {
      const personas = await Persona.find();
      res.json(personas);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  };

  exports.actualizarPersona = async (req,res) => {
    try {
        const {nombre, apPaterno, apMaterno,fechaNac,sexo} = req.body;
        let person = await Persona.findById(req.params.id);

        if(!person){
            res.status(404).json({msg: 'No existe la persona'});
        }

        person.nombre = nombre;
        person.apPaterno = apPaterno;
        person.apMaterno = apMaterno;
        person.fechaNac = fechaNac;
        person.sexo = sexo;

        person = await Persona.findOneAndUpdate({_id: req.params.id}, person, {new:true})
        res.json(person);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
exports.obtenerPersona = async (req, res) => {
    try {
        let person = await Persona.findById(req.params.id);
        if(!person){
            res.status(404).json({msg: 'No existe la persona'});
        }
        res.json(person)
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  };