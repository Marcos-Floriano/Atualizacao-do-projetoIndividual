
-- Exclui o banco de dados "Recuperacao"
drop database Recuperacao;

-- Criação do banco de dados "Recuperacao"
create database Recuperacao;

-- Seleciona o banco de dados "Recuperacao"
use Recuperacao;

-- Criação da tabela "Usuario"
create table Usuario (
    idUsuario int primary key auto_increment, -- configurando o id da tabela
    nome varchar(45),  -- configurando o campo nome da tabela
    Sobrenome varchar(45),  -- configurando o campo sobrenome da tabela
    dtNasc date,  -- configurando o campo data de nacimento da tabela
    Email varchar(45),  -- configurando o campo email da tabela
    senha varchar(45),  -- configurando o campo senha da tabela
    Sexo char(1),  -- configurando o campo sexo da tabela
    experiencia char(1),  -- configurando o campo experiencia da tabela
    NomedaArte varchar(45),  -- configurando o compo aonde o usuario ira inserir o nome da arte marcial que pratica
    -- somente se estiver prenchido com s o campo de experincia da tabela
    tempo varchar(45), -- configurando o compo aonde o usuario ira inserir o tempo que praticou a arte marcial
    -- somente se estiver prenchido com s o campo de experincia da tabela
    constraint chkSexo check (Sexo IN ('m', 'f')),  -- configurando o campo sexo da tabela para aceitar somente os valores m e f da tabela
    constraint chkExp check (experiencia IN ('s', 'n'))  -- configurando o campo experiencia da tabela para aceitar somente os valores s e n da tabela
);

-- Criação da tabela "Dojo"
create table Dojo (
    idDojo int primary key auto_increment, -- configurando o id da tabela
    fkUsuario int, -- configurando a chave estrangeira que ira estabelecer uma relação entre a tabela Dojo e outra tabela que seria a Usuario
    NomeDojo varchar(45), -- configurando o campo nome do dojo na tabela
    Localizacao varchar(45), -- configurando o compo aonde sera inserido a locolização do dojo na tabela
    Mestre varchar(45), --  configurando o compo aonde sera inserido o nome do Mestre do dojo na tabela
    constraint fkUsuario foreign key (fkUsuario) references Usuario(idUsuario) -- configurando arestrição de chave estrangeira para que ela consiga referenciar a tabela Usuario através do id dela 
);

SELECT NomeDojo,Localizacao,Mestre FROM Dojo;

-- Seleciona todos os registros da tabela "Dojo"
select * from Dojo;

-- Seleciona todos os registros da tabela "Usuario"
select * from Usuario;

-- Selects para dashboards

-- Esta consulta seleciona a coluna experiencia da tabela de Usuarios e conta os número de valores prenchidos com s ou n e os separa
select experiencia, count(experiencia) as Usuarios from Usuario group by experiencia;

-- Esta consulta seleciona a coluna Sexo da tabela de Usuarios e conta os número de valores prenchidos com m ou f e os separa
select Sexo, count(Sexo) as Usuarios from Usuario group by Sexo;

-- Esta consulta conta a qantidade de id da tabela usuario
select count(idUsuario) from Usuario;

--  Criação dos inserts

-- Inserção de registros na tabela "Usuario"
insert into Usuario (idUsuario, nome, Sobrenome, dtNasc, Email, senha, Sexo, experiencia) values
(null, 'Marcos', 'Vinicius', '2005-06-05', 'marcos.feu@sptech.school', '11223344', 'm', 's'),
(null, 'Sara', 'Almeida', '2004-07-12', 'sara.silva@sptech.school', '55667788', 'f', 's'),
(null, 'Rafael', 'Atlas', '2006-12-03', 'rafael.atlas@sptech.school', '123456', 'm', 'n');

-- Inserção de registros na tabela "Dojo"
insert into Dojo values
(null, 1, 'FK', 'Tatuapé', 'Fluido'),
(null, null, 'D+Fit', 'Carrão', 'Thiago'),
(null, 2, 'Myagi-do', 'Paulista', 'Larruso'),
(null, null, 'Galpão da Luta', 'Mogi', 'Debora');

--  Criação dos updates

-- Atualização de registros na tabela "Usuario" e "Dojo"
update Usuario set Email = 'Thomas23@gmail.com' where idUsuario = 3;
update Dojo set NomeDojo = 'Cobra Kai' where idDojo = 4;
update Dojo set fkUsuario = 3 where idDojo = 3;

--  Criação das views

-- Criação da view "Nome_do_aluno_do_dojo"
create view Nome_do_aluno_do_dojo as
select nome, experiencia, NomedaArte from Usuario JOIN Dojo
ON idUsuario = fkUsuario;

-- Criação da view "Todas_as_tabelas"
create view Todas_as_tabelas as
select * from Usuario JOIN Dojo ON idUsuario = fkUsuario;

-- Seleciona todos os registros da view "Nome_do_aluno_do_dojo"
select * from Nome_do_aluno_do_dojo;

-- Seleciona todos os registros da view "Todas_as_tabelas"
select * from Todas_as_tabelas;
