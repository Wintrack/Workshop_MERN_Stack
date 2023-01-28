/*
    Utilisation d'express et création d'une variable qui vas servir de router.
*/
const express = require('express');
const router = express.Router();

/*
    TO DO : Définir les différents champ à remplir pour utilisez l'application.
*/

const {
    getToDo,
    saveToDo,
    deleteToDo,
    updateToDo
} = require("../controllers/controller")

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);

module.exports = router;