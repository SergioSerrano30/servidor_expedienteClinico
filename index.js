//4
const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors');

const app = express();

//Conectar a la BD
conectarDB(); 
app.use(cors());

app.use(express.json());

app.use('/api/usuarios',require('./routes/usuario'))
app.use('/api/personas',require('./routes/persona'))
app.use('/api/domicilios',require('./routes/domicilio'))
app.use('/api/pacientes',require('./routes/paciente'))
app.use('/api/terapeutas',require('./routes/terapeuta'))
app.use('/api/operaciones',require('./routes/operacion'))
app.use('/api/historias',require('./routes/historia'))
app.use('/api/consultas',require('./routes/consulta'))

// app.get('/', (req,res) => {
//     res.send('Hola mundo');
// })

const PORT = process.env.PORT || 4000

app.listen(PORT, () =>{
    console.log('Servidor corriendo en el puerto '+PORT);
})