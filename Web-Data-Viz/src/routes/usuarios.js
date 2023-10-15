var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/listar_dojos", function (req, res) {
    usuarioController.listar_dojos(req, res);
});

router.get("/listar_artes", function (req, res) {
    usuarioController.listar_artes(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarRespostaSim", function (req, res) {
    usuarioController.cadastrarRespostaSim(req, res);
});

router.post("/cadastrarRespostaNao", function (req, res) {
    usuarioController.cadastrarRespostaNao(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/cadastrarDojoRespostaNao", function (req, res){
    usuarioController.cadastrarDojoRespostaNao(req, res);
})

router.post("/cadastrarExperiencia" , function (req, res){
    usuarioController.cadastrarExperiencia(req,res);
})

router.post("/pegaridExperiencia" , function (req, res){
    usuarioController.pegaridExperiencia(req,res);
})

router.post("/pegaridArte" , function (req, res){
    usuarioController.pegaridArte(req,res);
})

router.post("/cadastrarLutador" , function (req, res){
    usuarioController.cadastrarLutador(req,res);
})

router.post("/buscarid" , function (req, res){
    usuarioController.buscarid(req,res);
})

module.exports = router;