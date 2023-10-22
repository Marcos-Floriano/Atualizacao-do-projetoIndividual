
var express = require("express");
var router = express.Router();
var dojoController = require("../controllers/dojoController");

// Rota de teste para verificar se o servidor está funcionando
router.get("/", function (req, res) {
    dojoController.testar(req, res);
});

// Rota para listar os dojos
router.get("/listar", function (req, res) {
    dojoController.listar(req, res);
});

// Rota para receber os dados do HTML e direcionar para a função cadastrar em dojoController.js
router.post("/cadastrarDojo", function (req, res) {
    dojoController.cadastrarDojo(req, res);
});

// Exportação do objeto de roteamento
module.exports = router;
