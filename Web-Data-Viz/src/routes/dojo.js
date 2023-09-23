var express = require("express");
var router = express.Router();

var dojoController = require("../controllers/dojoController");

router.get("/", function (req, res) {
    dojoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    dojoController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de dojoController.js
router.post("/cadastrarDojo", function (req, res) {
    dojoController.cadastrarDojo(req, res);
});

module.exports = router;