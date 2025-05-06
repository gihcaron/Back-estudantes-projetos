const projetoModel = require('../models/projetoModel');

const getProjetos = async (req, res) => {
    try {
        const { nome } = req.query;
        const projetos = await projetoModel.getProjetos(nome);
        res.json(projetos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Projetos." });
    }
};

const getProjeto = async (req, res) => {
    try {
        const projeto = await projetoModel.getProjetoById(req.params.id);
        if (!projeto) {
            return res.status(404).json({ message: "projeto não encontrado." });
        }
        res.json(projeto);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar projeto." });
    }
};

const createProjeto = async (req, res) => {
    try {
        const { nome, organizacao, descricao } = req.body;
        const newProjeto = await projetoModel.createProjeto(nome, organizacao, descricao);
        res.status(201).json(newProjeto);
    } catch (error) {
	 console.log(error);
        if (error.code === "23505") { 
            return res.status(400).json({ message: "projeto já cadastrado." });
        }
        res.status(500).json({ message: "Erro ao criar projeto." });
    }
};

const updateProjeto = async (req, res) => {
    try {
        const { nome, organizacao, descricao} = req.body;
        const updateprojeto = await projetoModel.updateProjeto(req.params.id, nome, organizacao, descricao);
        if (!updateprojeto) {
            return res.status(404).json({ message: "projeto não encontrado." });
        }
        res.json(updateprojeto);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar projeto." });
    }
};

const  deleteProjeto = async (req, res) => {
    try {
        const message = await projetoModel. deleteProjeto(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar projeto." });
    }
};

module.exports = { getProjetos, getProjeto, createProjeto, updateProjeto,  deleteProjeto};