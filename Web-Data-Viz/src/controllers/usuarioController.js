var usuarioModel = require("../models/usuarioModel");

var sessoes = [];
var idUsuario = 0;

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
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

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function atualizarGenero(req, res) {

    var genero = req.body.generoServer;
    var idUsuario = req.body.idUsuarioServer;

    if (genero == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.atualizarGenero(genero, idUsuario)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String



                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrarRespostaSim(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
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
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (nacimento == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (experiencia == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (exp == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (tempo == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (grau == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
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

function buscarid(email,senha,tempo,grau,exp){
    usuarioModel.buscarid(email,senha).then(
        function (resultado) {
            
            idUsuario = resultado[0].idUsuario;
            cadastrarexperiencia(tempo,grau,exp)

        }
    )
}

function cadastrarexperiencia(tempo,grau,exp){
    
    usuarioModel.cadastrarExperiencia(idUsuario,tempo,grau).then(
    function (resultado) {

        usuarioModel.pegaridExperiencia(idUsuario,tempo,grau).then(
            function (resultado){

                var idExp = resultado[0].idExperiente;

                usuarioModel.pegaridArte(exp).then(
                    function (resultado){
        

                        var idArte = resultado[0].idArtemarcial;

                        usuarioModel.cadastrarLutador(idArte,idExp)

                    }
                )

            }
        )

    }
)
}

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
        res.status(400).send("Sua senha está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (experiencia == undefined) {
        res.status(400).send("Sua senha está undefined!");
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

function cadastrarDojoRespostaNao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeD = req.body.nomeDServer;
    var bairro = req.body.bairroServer;
    var rua = req.body.ruaServer;
    var numero = req.body.numeroServer;
    var Mestre = req.body.MestreServer;
    var ID = req.body.IDServer;
    ;
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
    } else if (ID == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }
        else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dojoModel.cadastrarRespostaNao(nomeD,localização,Mestre,ID)
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

module.exports = {
    entrar,
    cadastrarRespostaSim,
    cadastrarRespostaNao,
    cadastrarDojoRespostaNao,
    listar,
    testar,
    listar_dojos,
    listar_artes,
    buscarid,
    cadastrarexperiencia,
    atualizarGenero
}