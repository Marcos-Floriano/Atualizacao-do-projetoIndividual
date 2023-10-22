
var express = require("express");
var router = express.Router();
var medidaController = require("../controllers/medidaController");

// Rota para buscar as últimas medidas de satisfação/necessidade com base na experiência
router.get("/ultimas_SN/:experiencia", function (req, res) {
    medidaController.buscarUltimasMedidas_SN(req, res);
});

// Rota para buscar medidas em tempo real de satisfação/necessidade com base na experiência
router.get("/tempo-real_SN/:experiencia", function (req, res) {
    medidaController.buscarMedidasEmTempoReal_SN(req, res);
})

// Rota para buscar as últimas medidas de masculino/feminino com base na experiência
router.get("/ultimas_MF/:experiencia", function (req, res) {
    medidaController.buscarUltimasMedidas_MF(req, res);
});

// Rota para buscar medidas em tempo real de masculino/feminino com base na experiência
router.get("/tempo-real_MF/:experiencia", function (req, res) {
    medidaController.buscarMedidasEmTempoReal_MF(req, res);
})

// Rota para contar usuários
router.get("/contar_usuarios", function (req, res) {
    medidaController.contar_usuarios(req, res);
})

// Exportação do objeto de roteamento
module.exports = router;
