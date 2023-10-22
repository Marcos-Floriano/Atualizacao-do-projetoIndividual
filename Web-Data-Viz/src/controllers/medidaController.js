var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas_SN(req, res) { // Definição da função para buscar as últimas medidas com base na experiência dos usuarios
    
    var experiencia = req.params.experiencia; // Variavel para Obter o parâmetro de experiência da requisição

    medidaModel.buscarUltimasMedidas_SN(experiencia).then(function (resultado) { // Chama a função para buscar as últimas medidas com base na experiência
        if (resultado.length > 0) { // Verifica se há resultados
            res.status(200).json(resultado); // Retorna os resultados como json com o status 200
        } else {
            res.status(204).send("Nenhum resultado encontrado!") // Retorna a mensagem de nenhum resultado encontrado com o status 204
        }
    }).catch(function (erro) { // Captura e trata quaisquer erros durante a busca das últimas medidas
        console.log(erro); // Exibe o erro no console
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage); // Exibe a mensagem de erro personalizada
        res.status(500).json(erro.sqlMessage); // Retorna o erro como json com o status 500
    });
}


function buscarMedidasEmTempoReal_SN(req, res) { // Definição da função para buscar medidas em tempo real com base na experiência do usuario

    var experiencia = req.params.experiencia; // Obtém o parâmetro de experiência da requisição

    console.log(`Recuperando medidas em tempo real`); // Exibe uma mensagem no console

    medidaModel.buscarMedidasEmTempoReal_SN(experiencia).then(function (resultado) { // Chama a função para buscar medidas em tempo real com base na experiência
        if (resultado.length > 0) { // Verifica se há resultados
            res.status(200).json(resultado); // Retorna os resultados como json com o status 200
        } else {
            res.status(204).send("Nenhum resultado encontrado!") // Retorna a mensagem de nenhum resultado encontrado com o status 204
        }
    }).catch(function (erro) { // Captura e trata quaisquer erros durante a busca das medidas em tempo real
        console.log(erro); // Exibe o erro no console
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage); // Exibe a mensagem de erro personalizada
        res.status(500).json(erro.sqlMessage); // Retorna o erro como json com o status 500
    });
}

// Faz a mesma coisa que o buscarUltimasMedidas_SN só que para o genero
function buscarUltimasMedidas_MF(req, res) {
    
    var experiencia = req.params.experiencia;

    medidaModel.buscarUltimasMedidas_MF(experiencia).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// Faz a mesma coisa que o buscarMedidasEmTempoReal_SN só que para o genero
function buscarMedidasEmTempoReal_MF(req, res) {

    var experiencia = req.params.experiencia;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal_MF(experiencia).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// Faz a mesma coisa que o buscarMedidasEmTempoReal_SN só que para contar a quantidade de usuarios
function contar_usuarios(req, res){

    medidaModel.contar_usuarios().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

//exportando modulos
module.exports = {
    buscarUltimasMedidas_SN,
    buscarMedidasEmTempoReal_SN,
    buscarUltimasMedidas_MF,
    buscarMedidasEmTempoReal_MF,
    contar_usuarios
}