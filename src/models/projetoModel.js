const pool = require("../config/database");

const getProjetos = async (nome) => {
    if (nome) {
    result = await pool.query(
            "SELECT * FROM projetos WHERE nome ILIKE $1",
            [`%${nome}%`]
        );
        return result.rows;
    }
    else {
    result = await pool.query("SELECT * FROM projetos");
    }
    return result.rows;
};

const getProjetoById = async (id) => {
    const result = await pool.query("SELECT * FROM projetos WHERE id = $1", [id]);
    return result.rows[0];
};

const createProjeto = async (nome, organizacao, descricao) => {
    const result = await pool.query(
        "INSERT INTO projetos (nome, organizacao, descricao) VALUES ($1, $2, $3) RETURNING *",
        [nome, organizacao, descricao]
    );

    return result.rows[0];
};

const updateProjeto = async ( nome, organizacao, descricao, id) => {
    const result = await pool.query(
        "UPDATE projetos SET nome = $1, organizacao = $2, descricao = $3 WHERE id = $4 RETURNING *", 
        [nome, organizacao, descricao, id] 
    );
    return result.rows[0];
};

const deleteProjeto = async (id) => { 
    await pool.query("DELETE FROM projetos WHERE id = $1", [id]);
    return { message: "Projeto deletado com sucesso." };
}
module.exports = { getProjetos, getProjetoById, createProjeto, updateProjeto, deleteProjeto };