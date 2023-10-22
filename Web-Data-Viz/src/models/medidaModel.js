var database = require("../database/config");

function buscarUltimasMedidas_SN(experiencia) { // Função para buscarUltimasMedidas_SN com base na experiência

    instrucaoSql = '' // Inicializa a variável instrucaoSql como vazia

    if (process.env.AMBIENTE_PROCESSO == "producao") {// Verifica se o ambiente de processo é de produção
        instrucaoSql = `select experiencia, count(experiencia) as Usuarios from Usuario group by experiencia;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {// Verifica se o ambiente de processo é de desenvolvimento
        instrucaoSql = `select experiencia, count(experiencia) as Usuarios from Usuario group by experiencia;`;
    } else {// Se o ambiente de processo não estiver definido
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return// Retorna
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);//Exibe que vai ser executado
    return database.executar(instrucaoSql);// Retorna o resultado da execução da instrução SQL
}

// O mesmo processo e feito nas funções a baixo
function buscarMedidasEmTempoReal_SN(experiencia) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select experiencia, count(experiencia) as Usuarios from Usuario group by experiencia;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select experiencia, count(experiencia) as Usuarios from Usuario group by experiencia;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas_MF(experiencia) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select experiencia, count(experiencia) as Usuarios from Usuario group by experiencia;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select Sexo, count(Sexo) as Usuarios from Usuario group by Sexo;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal_MF(experiencia) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select experiencia, count(experiencia) as Usuarios from Usuario group by experiencia;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select Sexo, count(Sexo) as Usuarios from Usuario group by Sexo;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contar_usuarios(){

    instruçãoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "produção"){
        instrucaoSql = 'select experiencia, count(experiencia) as Usuarios from Usuario group by experiencia;';
    }else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = 'SELECT COUNT(idUsuario) as usuarios FROM Usuario;'
    }else{
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//exportando os modulos
module.exports = {
    buscarUltimasMedidas_SN,
    buscarMedidasEmTempoReal_SN,
    buscarUltimasMedidas_MF,
    buscarMedidasEmTempoReal_MF,
    contar_usuarios
}
