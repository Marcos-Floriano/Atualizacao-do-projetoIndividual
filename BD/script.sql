
-- Exclui o banco de dados "Recuperacao" caso ele exista 
drop database IF EXISTS Recuperacao;

-- Criação do banco de dados "Recuperacao" caso ele não exista 
create database IF NOT EXISTS Recuperacao;

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
    constraint chkSexo check (Sexo IN ('m', 'f','o')),  -- configurando o campo sexo da tabela para aceitar somente os valores m e f da tabela
    constraint chkExp check (experiencia IN ('s', 'n'))  -- configurando o campo experiencia da tabela para aceitar somente os valores s e n da tabela
);

-- Criação da tabela "Experiente"
create table Experiencia(
   idExperiente int primary key auto_increment,
   fkUsuario int, -- configurando a chave estrangeira que ira estabelecer uma relação entre a tabela Experiencia e outra tabela que seria a Usuario
   nomeArte varchar(45), -- configurando o compo aonde o usuario ira inserir o nome da arte marcial que praticou
   -- somente se estiver prenchido com s o campo de experincia da tabela Usuario
    tempo varchar(45), -- configurando o compo aonde o usuario ira inserir o tempo que praticou a arte marcial
    -- somente se estiver prenchido com s o campo de experincia da tabela Usuario
     Grau varchar(45), --  configurando o compo aonde o usuario ira inserir o grau da faixa da arte marcial que pratica
    -- somente se estiver prenchido com s o campo de experincia da tabela Usuario
     constraint fkUsuario foreign key (fkUsuario) references Usuario(idUsuario) -- configurando arestrição de chave estrangeira para que ela consiga referenciar a tabela Usuario através do id dela 

);

-- Criação da tabela "Dojo"
create table dojo (
    idDojo int primary key auto_increment, -- configurando o id da tabela dojo
    NomeDojo varchar(45), -- configurando o campo nome do dojo na tabela
    Mestre varchar(45) --  configurando o compo aonde sera inserido o nome do Mestre do dojo na tabela
);

-- Criação da tabela "Localizacao"
create table Localizacao (
idlocalizacao int primary key auto_increment, -- configurando a chave estrangeira que ira estabelecer uma relação entre a tabela Localizacao e outra tabela que seria a Dojo
Bairro varchar(45),-- configurando o campo Bairro da tabela Localizacao
Rua varchar(45), -- configurando o campo Rua da tabela Localizacao
Numero varchar(3), -- configurando o campo Numero da tabela Localizacao
fkDojo int, -- configurando a chave estrangeira que ira estabelecer uma relação entre a tabela Localizacao e outra tabela que seria a Usuario
constraint fkDojo foreign key (fkDojo) references dojo(idDojo) -- configurando arestrição de chave estrangeira para que ela consiga referenciar a tabela dojo através do id dela 
);

-- Criação da tabela "artemarcial"
create table artemarcial(
idArtemarcial int primary key auto_increment,-- configurando o id da tabela artemarcial
nome varchar(45)-- configurando o campo nome da tabela artemarcial
);

-- Criação da tabela "lutador"
create table lutador(
idLutador int auto_increment,-- configurando o id da tabela lutador
fkArtemarcial int,-- configurando a chave estrangeira que ira estabelecer uma relação entre a tabela lutador e outra tabela que seria a artemarcial
fkExperiencia int,-- configurando a chave estrangeira que ira estabelecer uma relação entre a tabela lutador e outra tabela que seria a Experiencia
constraint fkArtemarcial foreign key (fkArtemarcial) references artemarcial(idArtemarcial), -- configurando arestrição de chave estrangeira para que ela consiga referenciar a tabela artemarcial através do id dela 
constraint fkExperiencia foreign key (fkExperiencia ) references Experiencia(idExperiente), -- configurando arestrição de chave estrangeira para que ela consiga referenciar a tabela Experiencia através do id dela 
constraint PK_Lutador_Artemarcial_Experiencia PRIMARY KEY (idLutador,fkArtemarcial,fkExperiencia)-- Definindo a chave primária composta por idLutador, fkArtemarcial e fkExperiencia

);

-- Seleciona todos os registros da tabela "Dojo"
select * from dojo;
-- Seleciona todos os registros da tabela "Localizacao"
select * from Localizacao;
-- Seleciona todos os registros da tabela "Usuario"
select * from Usuario;
-- Seleciona todos os registros da tabela "Experiencia"
select* from Experiencia;
-- Seleciona todos os registros da tabela "lutador"
select* from lutador;

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

insert into dojo values
(null, 'FK', 'Fluido'),
(null, 'D+Fit', 'Thiago'),
(null, 'Myagi-do', 'Larruso'),
(null, 'Galpão da Luta', 'Debora');

-- Inserção de registros na tabela "Localizacao"
insert into Localizacao value
(null,'Vila yolanda II','Rua das palmeiras', '8', 1),
(null,'Barro Branco','Rua das palmas', '18', 2),
(null,'Cidade Tiradentes','Rua das rosas', '28', 3),
(null,'Jardim vitoria','Rua das lirios', '38', 4);

-- Inserção de registros na tabela "artemarcial"
insert into artemarcial values
(null,'taekwondo'),
(null,'jiu-jitsu'),
(null,'muay thai'),
(null,'capoeira');

--  Criação dos updates

-- Atualização de registros na tabela "Usuario"

update Usuario set Email = 'Thomas23@gmail.com' where idUsuario = 3;

--  Criação das views 


CREATE VIEW Pegar_usuario AS 
SELECT Usuario.nome AS "Usuario"
		,Experiencia.Grau
        ,artemarcial.nome AS "Arte Marcial" 
	FROM 
	Usuario JOIN Experiencia 
		ON Experiencia.fkUsuario = Usuario.idUsuario
	JOIN lutador
		ON lutador.fkExperiencia = Experiencia.idExperiente
	JOIN artemarcial
		ON lutador.fkArtemarcial = artemarcial.idArtemarcial;
        
SELECT * FROM Pegar_usuario;

--  view utilizada no Back End
CREATE VIEW Listar_dojos AS 
	SELECT NomeDojo,Mestre,Bairro 
		FROM 
        dojo JOIN Localizacao
			ON idDojo = fkDojo;
            
SELECT * FROM Listar_dojos;






