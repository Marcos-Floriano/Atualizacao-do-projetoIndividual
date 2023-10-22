var database = require("../database/config")

function listar() {//Função listar
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");//Mensagem exibida no console
    var instrucao = `
        SELECT NomeDojo,Mestre,Bairro FROM Listar_dojos; 
    `;// Select realizado pela função 
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);// Retorna o resultado da execução da instrução SQL
}

function buscarid(nomeD,Mestre) { // Definição da função para buscar o id com base no nome e mestre
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", nomeD,Mestre);//Mensagem exibida no console
    var instrucao = `
        SELECT idDojo FROM dojo WHERE NomeDojo = '${nomeD}' and Mestre = '${Mestre}';
    `;// Select realizado pela função
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);// Retorna o resultado da execução da instrução SQL
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarDojo(nomeD,Mestre) {//Função cadastrarDojo que ira cadastrar os dados na tabela dojo
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarDojo():", nomeD,Mestre);//Mensagem exibida no console
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO dojo (NomeDojo,Mestre) VALUES ('${nomeD}','${Mestre}');
    `;// Insert realizado pela função
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);// Retorna o resultado da execução da instrução SQL
}

function cadastrarLoc(bairro,rua,numero,idDojo) {//Função cadastrarDojo que ira cadastrar os dados na tabela Localizacao
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarDojo():", bairro,rua,numero,idDojo);//Mensagem exibida no console
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Localizacao (Bairro,Rua,Numero,fkDojo) VALUES ('${bairro}','${rua}','${numero}',${idDojo});
    `;// Insert realizado pela função
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);// Retorna o resultado da execução da instrução SQL
}

//exportando os modulos
module.exports = {
    cadastrarDojo,
    listar,
    buscarid,
    cadastrarLoc
};