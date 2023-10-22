var database = require("../database/config")

function listar() {//Função listar
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;// Select realizado pela função 
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);// Retorna o resultado da execução da instrução SQL
}

// Até o pegaridExperiencia o processo e o mesmo
function listar_dojos() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT NomeDojo,Localizacao,Mestre FROM Dojo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar_artes() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM artemarcial;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM Usuario WHERE Email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarid(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario FROM Usuario WHERE Email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pegaridArte(exp) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", exp)
    var instrucao = `
        SELECT idArtemarcial FROM artemarcial WHERE idArtemarcial = ${exp};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pegaridExperiencia(id,tempo,grau) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", id,tempo,grau)
    var instrucao = `
        SELECT idExperiente FROM Experiencia WHERE fkUsuario = ${id} AND tempo = '${tempo}' AND Grau = '${grau}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//A partir daqui muda

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarRespostaSim(nome,sobrenome,nacimento,email,senha,genero,experiencia) { // Função para cadastrar a resposta só se o usuario marcou com sim no cadastro
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarRespostaSim():", nome,sobrenome,nacimento,email,senha,genero,experiencia);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario (nome,Sobrenome,dtNasc,Email,senha, Sexo, experiencia) VALUES ('${nome}','${sobrenome}','${nacimento}', '${email}', '${senha}', '${genero}', '${experiencia}');
    `;// Select realizado pela função
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);// Retorna o resultado da execução da instrução SQL
}

// Até a função cadastrarLutador o processo e o mesmo
function cadastrarExperiencia(id, tempo, grau) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarRespostaSim():", id, tempo, grau);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Experiencia (fkUsuario,tempo,Grau) VALUES (${id},'${tempo}','${grau}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarLutador(idArte,idExp) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarRespostaSim():", idArte,idExp);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO lutador (fkArtemarcial,fkExperiencia) VALUES (${idArte},${idExp});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//A partir daqui fica um pouco diferente
// Essa função so tem uma coisa diferente
function atualizarGenero(genero, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarRespostaSim():", genero, idUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        UPDATE Usuario SET Sexo = '${genero}' WHERE idUsuario = ${idUsuario};
    `;// Pois inves de um select e um update
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
// Já essa só sera realizada se o usuario marcar com não no campo experiencia do cadastro
function cadastrarRespostaNao(nome,sobrenome,nacimento,email,senha,genero,experiencia) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarRespostaSim():", nome,sobrenome,nacimento,email,senha,genero,experiencia);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario (Nome,sobrenome,dtNasc,Email,senha, Sexo, experiencia) VALUES ('${nome}','${sobrenome}','${nacimento}', '${email}', '${senha}', '${genero}', '${experiencia}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



//exportando os modulos
module.exports = {
    entrar,
    cadastrarRespostaSim,
    cadastrarRespostaNao,
    listar,
    listar_dojos,
    listar_artes,
    cadastrarExperiencia,
    pegaridExperiencia,
    pegaridArte,
    cadastrarLutador,
    buscarid,
    atualizarGenero
};
