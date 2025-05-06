const estudanteModel = require('../models/estudanteModel');

const getEstudantes = async (req, res) => {
    try {
        const { email } = req.query;
        const estudantes = await estudanteModel.getEstudantes(email);
        res.json(estudantes);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar estudantes." });
    }
};

const getEstudante = async (req, res) => {
    try {
        const estudante = await estudanteModel.getEstudanteById(req.params.id);
        if (!estudante) {
            return res.status(404).json({ message: "Estudante não encontrado." });
        }
        res.json(estudante);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar estudante." });
    }
};

const createEstudante = async (req, res) => {
    try {
        const { nome, email, projetos_id } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newEstudante = await estudanteModel.createEstudante(nome, email, photo, projetos_id);
        res.status(201).json(newEstudante);
    } catch (error) {
     console.log(error);
        if (error.code === "23505") { 
            return res.status(400).json({ message: "Estudante já cadastrado." });
        }
        res.status(500).json({ message: "Erro ao criar estudante." });
    }
''
};

const updateEstudante = async (req, res) => {
    try {
        const { nome, email, projetos_id } = req.body;
        const updateEstudante = await estudanteModel.updateEstudante (req.params.id, nome, email, projetos_id);
        if (!updateEstudante) {
            return res.status(404).json({ message: "Estudante não encontrado." });
        }
        res.json(updateEstudante);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Estudante." });
    }
}


const  deleteEstudante = async (req, res) => {
    try {
        const message = await estudanteModel. deleteEstudante(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar estudante." });
    }
};

module.exports = { getEstudantes, getEstudante, createEstudante, updateEstudante,  deleteEstudante};