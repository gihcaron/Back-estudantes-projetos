CREATE DATABASE alunos;

\c alunos

CREATE TABLE projetos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    organizacao VARCHAR(255),
    descricao VARCHAR(255)

);

CREATE TABLE estudantes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    photo TEXT,
    projetos_id INTEGER REFERENCES projetos(id) ON DELETE SET NULL
);

INSERT INTO projetos (nome, organizacao, descricao) VALUES
('Projeto FLL', 'First Lego Legue', 'Programacao e robotica'),
('Projeto FRC', 'First Robotics Competition', 'Programacao e robotica'),
('Projeto VEX', 'VEX Robotics', 'Programacao e robotica'),
('Projeto WRO', 'World Robot Olympiad', 'Programacao e robotica'),
('Projeto OBR', 'Olimpiada Brasileira de Robotica', 'Programacao e robotica'),
('Projeto FTC', 'First Tech Challenge', 'Programacao e robotica'),
('Projeto F1 in Schools', 'F1 in Schools', 'STEM');

INSERT INTO estudantes (nome, email, projetos_id) VALUES
('Alice Silva', 'alice.silva@gmail.com', 1),
('Bruno Costa', 'bruno.costa@gmail.com', 2),
('Carla Souza', 'carla.souza@gmail.com', 3),
('Daniel Oliveira', 'daniel.oliveira@gmail.com', 4),
('Eduarda Lima', 'eduarda.lima@gmail.com', 5),
('Felipe Santos', 'felipe.santos@gmail.com', 6),
('Gabriela Rocha', 'gabriela.rocha@gmail.com', 7),
('Henrique Alves', 'henrique.alves@gmail.com', 1),
('Isabela Martins', 'isabela.martins@gmail.com', 2),
('João Pereira', 'joao.pereira@gmail.com', 3),
('Karina Mendes', 'karina.mendes@gmail.com', 4),
('Leonardo Araujo', 'leonardo.araujo@gmail.com', 5),
('Mariana Ribeiro', 'mariana.ribeiro@gmail.com', 6),
('Nicolas Fernandes', 'nicolas.fernandes@gmail.com', 7),
('Olivia Cardoso', 'olivia.cardoso@gmail.com', 1),
('Paulo Nunes', 'paulo.nunes@gmail.com', 2),
('Quésia Barros', 'quesia.barros@gmail.com', 3),
('Rafael Teixeira', 'rafael.teixeira@gmail.com', 4),
('Sofia Vieira', 'sofia.vieira@gmail.com', 5),
('Thiago Monteiro', 'thiago.monteiro@gmail.com', 6),
('Ursula Freitas', 'ursula.freitas@gmail.com', 7),
('Victor Gomes', 'victor.gomes@gmail.com', 1),
('Wesley Dias', 'wesley.dias@gmail.com', 2),
('Xavier Pinto', 'xavier.pinto@gmail.com', 3),
('Yasmin Castro', 'yasmin.castro@gmail.com', 4);
