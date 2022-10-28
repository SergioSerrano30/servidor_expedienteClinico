const { response } = require("express");
const Domicilio = require("../models/Domicilio");

exports.crearDomicilio = async (req, res) => {
  try {
    let domicilio;
    //Creamos nuestro domicilio
    domicilio = new Domicilio(req.body);

    await domicilio.save();
    res.send(domicilio);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
exports.obtenerDomicilios = async (req, res) => {
    try {
      const domicilios = await Domicilio.find();
      res.json(domicilios);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  };

  exports.actualizarDomicilio = async (req,res) => {
    try {
        const {calle, numero_EXT, numero_INT,colonia,entrecalle1,entrecalle2,referencia,pais,estado,municipio} = req.body;
        let dom = await Persona.findById(req.params.id);

        if(!dom){
            res.status(404).json({msg: 'No existe la persona'});
        }

        dom.calle = calle;
        dom.numero_EXT = numero_EXT;
        dom.numero_INT = numero_INT;
        dom.colonia = colonia;
        dom.entrecalle1 = entrecalle1;
        dom.entrecalle2 = entrecalle2;
        dom.referencia = referencia;
        dom.pais = pais;
        dom.estado = estado;
        dom.municipio = municipio;

        dom = await Domicilio.findOneAndUpdate({_id: req.params.id}, dom, {new:true})
        res.json(dom);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
exports.obtenerDomicilio = async (req, res) => {
    try {
        let dom = await Domicilio.findById(req.params.id);
        if(!dom){
            res.status(404).json({msg: 'No existe el domicilio'});
        }
        res.json(person)
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  };