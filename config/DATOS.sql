CREATE DATABASE Proyect_c;
USE Proyect_c;
CREATE TABLE Usuarios(
    User_Id INT NOT NULL AUTO_INCREMENT ,
    UserName TEXT NOT NULL ,
    UserGmail TEXT NOT NULL,
    UserPassword TEXT NOT NULL,
    UserEstado BOOLEAN,
    PRIMARY KEY (User_Id)
);

INSERT INTO Usuarios(UserName,UserGmail,UserPassword,UserEstado)
VALUES
('Isauro jose paredes heredia ','isaurini1902@gmail.com','isa1902',true);

SELECT * FROM Usuarios WHERE UserGmail='isaurini1902@gmail.com' AND UserPassword='isa1902';