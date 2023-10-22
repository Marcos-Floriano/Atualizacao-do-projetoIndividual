var usuarioModel = require("../models/usuarioModel");

var sessoes = [];
var idUsuario = 0;

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}


function listar(req, res) {//função de listar usuários
 
    usuarioModel.listar() // Chamada do método de listagem
        .then(function (resultado) {
          
            if (resultado.length > 0) {  // Verifica se há resultados retornados
                res.status(200).json(resultado);// Retorna os resultados como json com código se estiver ok
            } else {
                res.status(204).send("Nenhum resultado encontrado!"); // Retorna uma mensagem de nenhum resultado encontrado com o código de status 204 (Nenhum conteúdo)
            }
        }).catch(
            function (erro) {
                
                console.log(erro);// Captura e mostra quaisquer erros ocorridos durante a consulta
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage); // Retorna o erro como uma resposta JSON com o código de status 500 (Erro interno do servidor)
            }
        );
}

//O mesmo processo e repitido na função listar_dojos e na listar_artes

function listar_dojos(req, res) {
    usuarioModel.listar_dojos()
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

function listar_artes(req, res) {
    usuarioModel.listar_artes()
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

function entrar(req, res) { // Função para entrar

    var email = req.body.emailServer; // Variavel para obter o email do usuario 
    var senha = req.body.senhaServer; // Variavel para obter a senha do usuario 

    if (email == undefined) { // Verifica se o email está undefined
        res.status(400).send("Seu email está undefined!"); // Mostra uma mensagem de erro com código de status 400 
    } else if (senha == undefined) { // Verifica se a senha está undefined
        res.status(400).send("Sua senha está indefinida!"); // Mostra uma mensagem de erro com código de status 400 
    } else {
        
        usuarioModel.entrar(email, senha) // Chama a função de entrar no usuariomodel com o email e senha fornecidos
            .then(
                function (resultado) { // Verificação de sucesso
                    console.log(`\nResultados encontrados: ${resultado.length}`); // Mostra o número de resultados encontrados
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma json em String

                    if (resultado.length == 1) { // Verifica se apenas um usuário foi retornado
                        console.log(resultado); 
                        res.json(resultado[0]); // Retorna o resultado como json
                    } else if (resultado.length == 0) { // Verifica se nenhum usuário foi retornado
                        res.status(403).send("Email e/ou senha inválido(s)"); // Mostra uma mensagem de erro com código de status 403 
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!"); // Mostra uma mensagem de erro com código de status 403
                    }
                }
            ).catch(
                function (erro) { // Captura e exibe quaisquer erros ocorridos durante a execução
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage); // Retorna o erro como uma resposta json com o código de status 500 (Erro interno do servidor)
                }
            );
    }
}


function atualizarGenero(req, res) { // Definição da função para atualizar o gênero

    var genero = req.body.generoServer; // Variavel para Obter o gênero do usuario
    var idUsuario = req.body.idUsuarioServer; // Variavel para Obter o id do usuário

    if (genero == undefined) { // Verifica se o gênero está undefined
        res.status(400).send("Seu email está undefined!"); // Retorna uma mensagem de erro com código de status 400 
    } else if (idUsuario == undefined) { // Verifica se o id do usuário está undefined
        res.status(400).send("Sua senha está indefinida!"); // Retorna uma mensagem de erro com código de status 400 
    } else {
        
        usuarioModel.atualizarGenero(genero, idUsuario) // Chama a função para atualizar o gênero no modelo de usuário com o gênero e id do usuário fornecidos
            .then(
                function (resultado) { // Verificação de sucesso da chamada
                    console.log(`\nResultados encontrados: ${resultado.length}`); // Exibe o número de resultados encontrados
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma json em String



                }
            ).catch(
                function (erro) { // Captura e exibe quaisquer erros ocorridos durante a execução
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage); // Retorna o erro como uma resposta json com o código de status 500
                }
            );
    }

}


function cadastrarRespostaSim(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    //recuperando valores
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var nacimento = req.body.nacimentoServer;
    var sobrenome = req.body.sobrenomeServer;
    var genero = req.body.generoServer;
    var experiencia = req.body.experienciaServer;
    var exp = req.body.expServer;
    var tempo = req.body.tempoServer;
    var grau =  req.body.grauServer;

    // Faça as validações dos valores
    //validando os valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (nacimento == undefined) {
        res.status(400).send("Sua nacimento está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Sua sobrenome está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Sua genero está undefined!");
    } else if (experiencia == undefined) {
        res.status(400).send("Sua experiencia está undefined!");
    }else if (exp == undefined) {
        res.status(400).send("Sua exp está undefined!");
    }else if (tempo == undefined) {
        res.status(400).send("Sua tempo está undefined!");
    }else if (grau == undefined) {
        res.status(400).send("Sua grau está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        //passando os valores como parametros
        usuarioModel.cadastrarRespostaSim(nome,sobrenome,nacimento,email,senha, genero, experiencia)
            .then(
                function (resultado) {
                    res.json(resultado);

                    buscarid(email,senha,tempo,grau,exp)

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

function buscarid(email, senha, tempo, grau, exp) { // Definição da função para buscar o id do usuário com base no email e senha

    usuarioModel.buscarid(email, senha).then( // Chama a função para buscar o id do usuário com base no email e senha fornecidos
        function (resultado) { // Verificação de sucesso da chamada
            
            idUsuario = resultado[0].idUsuario; // Atribui o id do usuário ao idUsuario
            cadastrarexperiencia(tempo, grau, exp); // Chama a função para cadastrar a experiência com o tempo, grau e experiência fornecidos

        }
    )
}


function cadastrarexperiencia(tempo, grau, exp) { // Definição da função para cadastrar a experiência com base no tempo, grau e experiência fornecidos
    
    usuarioModel.cadastrarExperiencia(idUsuario, tempo, grau).then( // Chama a função para cadastrar a experiência com o id do usuário, tempo e grau fornecidos
        function (resultado) { // Verificação de sucesso da chamada

            usuarioModel.pegaridExperiencia(idUsuario, tempo, grau).then( // Chama a função para obter o id da experiência com base no id do usuário, tempo e grau fornecidos
                function (resultado) { // Verificação de sucesso da chamada

                    var idExp = resultado[0].idExperiente; //Variavel que atribui o id da experiência a idExp

                    usuarioModel.pegaridArte(exp).then( // Chama a função para obter o id da arte marcial com base na experiência fornecida
                        function (resultado) { // Verificação de sucesso da chamada
                            var idArte = resultado[0].idArtemarcial; //Variavel que atribui o id da arte marcial a idArte

                            usuarioModel.cadastrarLutador(idArte, idExp); // Chama a função para cadastrar o lutador com os ids da arte e da experiência
                        }
                    )

                }
            )

        }
    )
}

// Essa funçaão faz a quase a mesma coisa que a cadastrarRespostaSim a diferença e que ela so cadastro quando o usuario coloca que não tem experiencia no cadastro
function cadastrarRespostaNao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var nacimento = req.body.nacimentoServer;
    var sobrenome = req.body.sobrenomeServer;
    var genero = req.body.generoServer;
    var experiencia = req.body.experienciaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (nacimento == undefined) {
        res.status(400).send("Sua nacimento está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Sua sobrenome está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Sua genero está undefined!");
    } else if (experiencia == undefined) {
        res.status(400).send("Sua experiencia está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarRespostaNao(nome,sobrenome,nacimento,email,senha, genero, experiencia)
            .then(
                function (resultado) {
                    res.json(resultado);
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

//importando os modulos
module.exports = {
    entrar,
    cadastrarRespostaSim,
    cadastrarRespostaNao,
    listar,
    testar,
    listar_dojos,
    listar_artes,
    buscarid,
    cadastrarexperiencia,
    atualizarGenero
}