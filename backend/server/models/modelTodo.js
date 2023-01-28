/*
    On utilise le modul mongoose qui permet ici de créer des modèles accetable par la DB.
*/
var mongoose = require('mongoose')

/*
    TO DO :

    Définir à quoi de ressemble une taks dans la DB. (ID générer automatiquement)
*/
var schema = new mongoose.Schema(
    {
        /*
            exemple :
            name: {
                type: String,
                required: true,
            }
        */
    }
)

module.exports = mongoose.model('task', schema)