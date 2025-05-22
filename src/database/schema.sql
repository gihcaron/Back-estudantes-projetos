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


INSERT INTO estudantes (nome, email, projetos_id) VALUES
('Ana Paula', 'ana.paula@gmail.com', 5),
('Brenda Lopes', 'brenda.lopes@gmail.com', 6),
('Caio Moreira', 'caio.moreira@gmail.com', 7),
('Diana Farias', 'diana.farias@gmail.com', 1),
('Eduardo Ramos', 'eduardo.ramos@gmail.com', 2),
('Fernanda Dias', 'fernanda.dias@gmail.com', 3),
('Gustavo Pires', 'gustavo.pires@gmail.com', 4),
('Helena Duarte', 'helena.duarte@gmail.com', 5),
('Igor Matos', 'igor.matos@gmail.com', 6),
('Juliana Torres', 'juliana.torres@gmail.com', 7),
('Kleber Souza', 'kleber.souza@gmail.com', 1),
('Larissa Cunha', 'larissa.cunha@gmail.com', 2),
('Marcelo Braga', 'marcelo.braga@gmail.com', 3),
('Natália Lopes', 'natalia.lopes@gmail.com', 4),
('Otávio Lima', 'otavio.lima@gmail.com', 5),
('Patrícia Silva', 'patricia.silva@gmail.com', 6),
('Renato Costa', 'renato.costa@gmail.com', 7),
('Sabrina Rocha', 'sabrina.rocha@gmail.com', 1),
('Tatiane Melo', 'tatiane.melo@gmail.com', 2),
('Ulisses Prado', 'ulisses.prado@gmail.com', 3),
('Vanessa Moura', 'vanessa.moura@gmail.com', 4),
('William Tavares', 'william.tavares@gmail.com', 5),
('Yuri Almeida', 'yuri.almeida@gmail.com', 6),
('Zuleica Ramos', 'zuleica.ramos@gmail.com', 7),
('Amanda Reis', 'amanda.reis@gmail.com', 1),
('Bruno Martins', 'bruno.martins@gmail.com', 2),
('Camila Nunes', 'camila.nunes@gmail.com', 3),
('Diego Barbosa', 'diego.barbosa@gmail.com', 4),
('Elisa Cardoso', 'elisa.cardoso@gmail.com', 5),
('Fabio Ferreira', 'fabio.ferreira@gmail.com', 6),
('Giovana Lopes', 'giovana.lopes@gmail.com', 7),
('Hugo Silva', 'hugo.silva@gmail.com', 1),
('Isis Pereira', 'isis.pereira@gmail.com', 2),
('Jonas Souza', 'jonas.souza@gmail.com', 3),
('Kelly Oliveira', 'kelly.oliveira@gmail.com', 4),
('Lucas Mendes', 'lucas.mendes@gmail.com', 5),
('Marta Lima', 'marta.lima@gmail.com', 6),
('Nicolas Rocha', 'nicolas.rocha2@gmail.com', 7),
('Olga Figueiredo', 'olga.figueiredo@gmail.com', 1),
('Pedro Gomes', 'pedro.gomes@gmail.com', 2),
('Quintino Alves', 'quintino.alves@gmail.com', 3),
('Rafaela Dias', 'rafaela.dias@gmail.com', 4),
('Samuel Costa', 'samuel.costa@gmail.com', 5),
('Talita Souza', 'talita.souza@gmail.com', 6),
('Ubirajara Pinto', 'ubirajara.pinto@gmail.com', 7),
('Vera Lúcia', 'vera.lucia@gmail.com', 1),
('Wagner Lopes', 'wagner.lopes@gmail.com', 2),
('Ximena Duarte', 'ximena.duarte@gmail.com', 3),
('Yasmin Freitas', 'yasmin.freitas@gmail.com', 4),
('Zeca Amaral', 'zeca.amaral@gmail.com', 5),
('Aline Costa', 'aline.costa@gmail.com', 6),
('Bruno Farias', 'bruno.farias@gmail.com', 7),
('Carolina Dias', 'carolina.dias@gmail.com', 1),
('Daniela Souza', 'daniela.souza@gmail.com', 2),
('Eduardo Martins', 'eduardo.martins@gmail.com', 3),
('Fernanda Rocha', 'fernanda.rocha@gmail.com', 4),
('Gabriel Lima', 'gabriel.lima@gmail.com', 5),
('Helena Silva', 'helena.silva@gmail.com', 6),
('Igor Santos', 'igor.santos@gmail.com', 7),
('Juliana Alves', 'juliana.alves@gmail.com', 1),
('Katia Mendes', 'katia.mendes@gmail.com', 2),
('Leonardo Souza', 'leonardo.souza@gmail.com', 3),
('Marina Costa', 'marina.costa@gmail.com', 4),
('Nathalia Gomes', 'nathalia.gomes@gmail.com', 5);


UPDATE estudantes
SET photo = '/images/alice.jpg'
WHERE nome = 'Alice Silva'


UPDATE estudantes
SET photo = '/images/ana.jpg'
WHERE nome = 'Ana Paula';


UPDATE estudantes
SET photo = '/images/rafaela.jpg'
WHERE nome = 'Rafaela Dias';


