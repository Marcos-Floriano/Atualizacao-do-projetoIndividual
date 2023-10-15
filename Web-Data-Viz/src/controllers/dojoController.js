var dojoModel = require("../models/dojoModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA DojoController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    dojoModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarDojo(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeD = req.body.nomeDServer;
    var Mestre = req.body.MestreServer;

    var bairro = req.body.bairroServer;
    var rua = req.body.ruaServer;
    var numero = req.body.numeroServer;

    // Faça as validações dos valores
    if (nomeD == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (rua == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (Mestre == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dojoModel.cadastrarDojo(nomeD,Mestre)
            .then(
                function (resultado) {
                    res.json(resultado);

                    cadastrarloc(nomeD,bairro,rua,numero,Mestre)

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarloc(nomeD,bairro,rua,numero,Mestre){
    
    dojoModel.buscarid(nomeD,Mestre).then(
        function (resultado){

            var idDojo = resultado[0].idDojo;

            dojoModel.cadastrarLoc(bairro,rua,numero,idDojo).then(
                function (resultado){
                    
                }
            )

        }
    )

}

module.exports = {
    cadastrarDojo,
    listar
}