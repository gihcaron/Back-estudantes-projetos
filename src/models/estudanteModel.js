const pool = require("../config/database");

const getEstudantes = async (email) => {
    if (email) {
    result = await pool.query(
            `SELECT estudantes.*, projetos.nome AS projeto_nome 
            FROM estudantes 
            LEFT JOIN projetos ON estudantes.projetos_id = projetos.id 
            WHERE estudantes.email ILIKE $1`,
            [`%${email}%`]
        );
        return result.rows;
    }
    else {
    result = await pool.query( 
        `SELECT estudantes.*, projetos.nome AS projeto_nome 
        FROM estudantes 
        LEFT JOIN projetos ON estudantes.projetos_id = projetos.id`);
    }
    return result.rows;
};

const getEstudanteById = async (id) => {
    const result = await pool.query("SELECT * FROM estudantes WHERE id = $1", [id]);
    return result.rows[0];
};

const createEstudante = async (nome, organizacao, descricao) => {
   try { const result = await pool.query(
        "INSERT INTO estudantes (nome, organizacao, descricao) VALUES ($1, $2, $3) RETURNING *",
        [nome, organizacao, descricao]
    );
} catch (error) {
        console.error("Erro ao criar estudante:", error);
        throw error; 
    }
    return result.rows[0];
};

const updateEstudante = async ( nome, organizacao, descricao, id) => {
    const result = await pool.query(
        "UPDATE estudantes SET nome = $1, organizacao = $2, descricao = $3 WHERE id = $4 RETURNING *", 
        [nome, organizacao, descricao, id] 
    );
    return result.rows[0];
};

const deleteEstudante = async (id) => { 
    await pool.query("DELETE FROM estudantes WHERE id = $1", [id]);
    return { message: "estudante deletado com sucesso." };
}
module.exports = { getEstudantes, getEstudanteById, createEstudante, updateEstudante, deleteEstudante };