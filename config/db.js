//0
const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'expedienteClinico'
        })
        console.log('BD Mongo Conectada');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
// (async () => {
//     try {
//         const db = await mongoose.connect(config.CONNECTION_STRING, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             dbName: config.DATABASE
//         });
//         console.log('Database is connected to: ', db.connection.name);
//     } catch (error) {
//         console.log('Error: ', error);
//     }
// })();

module.exports = conectarDB