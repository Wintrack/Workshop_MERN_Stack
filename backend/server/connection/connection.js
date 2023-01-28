/*
    On utilise le modul mongoose qui permet ici de créer des modèles accetable par la DB.
*/
const mongoose = require('mongoose');

/*
    On prend avantage de Nodejs et on fait une fonction asynchrone permettant ainsi d'éviter trop longtemps la connexion à la DB.
*/

/*
    TO DO :
        Remplir les champs à compléter.
*/

const connectDB = async () => {
    try {
        //MongoDB connection string
        const con = await mongoose.connect(/* URL de connection */, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: /* nom de t'a DB*/
        });
        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.log("ERROR : " + err)
        process.exit(84);
    }
}

module.exports = connectDB