var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas_SN/:experiencia", function (req, res) {
    medidaController.buscarUltimasMedidas_SN(req, res);
});

router.get("/tempo-real_SN/:experiencia", function (req, res) {
    medidaController.buscarMedidasEmTempoReal_SN(req, res);
})

router.get("/ultimas_MF/:experiencia", function (req, res) {
    medidaController.buscarUltimasMedidas_MF(req, res);
});

router.get("/tempo-real_MF/:experiencia", function (req, res) {
    medidaController.buscarMedidasEmTempoReal_MF(req, res);
})

router.get("/contar_usuarios", function (req, res) {
    medidaController.contar_usuarios(req, res);
})

module.exports = router;