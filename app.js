/*
    Tous ses "require" permette de d'utiliser les différents module dont nous avons besoin
        - express => (voir pdf)
        - dotenv => permet d'utilisez des fichiers de configuration avec des variables.
        - morgan => permet l'utilisation d'un système de log pour serveur.
        - bodyparser => Pour lire les données HTTP, nous devons utiliser le module "body-parser". Body-parser est un middleware express qui lit l’entrée d’un formulaire et le stocke comme un objet javascript accessible par le développeur.
        - cors => Wikipédia : "Le Cross-Origin Resource Sharing ou CORS est un mécanisme qui permet à des ressources restreintes d'une page web d'être récupérées par un autre domaine extérieur au domaine à partir duquel la première ressource a été servie."
*/
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');

/*
    Définit notre application via express()
*/
const app = express();

/*
Définition deu cors. En gros permet la communication react => API
*/

const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));

/*
    Définition de l'emplacement du fichier de config .env et déclaration du PORT à utiliser. Via dot.env ou un port de secours.
*/
dotenv.config({ path: './config.env' })
const PORT = process.env.PORT || 8080;

/*
    Setup du système de log avec un minimum de data
*/
app.use(morgan('tiny'))

/*
    Définistion de body parser. Cela permet entre autre de récupérer les req de l'utilisateur sous forme de json.
*/

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

/*
    Définition de notre route avec comme début '/api/'
*/
app.use('/api/', require('./server/routes/router'));

/*
    Indique à app d'écouter pour les requêtes http sur le port définit
*/
app.listen(PORT, () => { console.log(`Server is running on http://${process.env.DB_HOST}:${process.env.PORT}`) })