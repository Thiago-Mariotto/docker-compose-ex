CREATE DATABASE IF NOT EXISTS turma17
    DEFAULT CHARACTER SET = 'utf8mb4';

USE turma17;

CREATE TABLE IF NOT EXISTS instructors (name VARCHAR(20), role VARCHAR(20));

INSERT INTO instructors (name, role) VALUES 
    ('Mariotto', 'Qm qr ser backender'),
    ('Felipe', 'Data man'),
    ('Pedro', 'x1 noob'),
    ('Tiago', 'Hj eu só quero paz')
