
var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

// Rota para teste
router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

// Rota para listar usuários
router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

// Rota para listar dojos
router.get("/listar_dojos", function (req, res) {
    usuarioController.listar_dojos(req, res);
});

// Rota para listar artes
router.get("/listar_artes", function (req, res) {
    usuarioController.listar_artes(req, res);
});

// Rota para cadastrar resposta positiva
router.post("/cadastrarRespostaSim", function (req, res) {
    usuarioController.cadastrarRespostaSim(req, res);
});

// Rota para cadastrar resposta negativa
router.post("/cadastrarRespostaNao", function (req, res) {
    usuarioController.cadastrarRespostaNao(req, res);
});

// Rota para autenticar usuário
router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

// Rota para atualizar gênero
router.post("/atualizarGenero", function (req, res) {
    usuarioController.atualizarGenero(req, res);
});

// Rota para cadastrar dojo com resposta negativa
router.post("/cadastrarDojoRespostaNao", function (req, res){
    usuarioController.cadastrarDojoRespostaNao(req, res);
})

// Rota para cadastrar experiência
router.post("/cadastrarExperiencia" , function (req, res){
    usuarioController.cadastrarExperiencia(req,res);
})

// Rota para obter id da experiência
router.post("/pegaridExperiencia" , function (req, res){
    usuarioController.pegaridExperiencia(req,res);
})

// Rota para obter id da arte
router.post("/pegaridArte" , function (req, res){
    usuarioController.pegaridArte(req,res);
})

// Rota para cadastrar lutador
router.post("/cadastrarLutador" , function (req, res){
    usuarioController.cadastrarLutador(req,res);
})

// Rota para buscar id
router.post("/buscarid" , function (req, res){
    usuarioController.buscarid(req,res);
})

// Exportação do objeto de roteamento
module.exports = router;
