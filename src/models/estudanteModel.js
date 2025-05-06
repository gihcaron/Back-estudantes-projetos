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

const createEstudante = async (nome, email, photo, projetos_id) => {
   try { 
    const result = await pool.query(
        "INSERT INTO estudantes (nome, email, photo, projetos_id) VALUES ($1, $2, $3, $4) RETURNING *",
        [nome, email, photo, projetos_id]
    );
    return result.rows[0];
} catch (error) {
        console.error("Erro ao criar estudante:", error);
        throw error; 
    }

};

const updateEstudante = async (id, nome, email, projetos_id) => {
    const result = await pool.query(
        "UPDATE estudantes SET nome = $1, email = $2, projetos_id = $3 WHERE id = $4 RETURNING *", 
        [nome, email, projetos_id, id] 
    );
    return result.rows[0];
};

const deleteEstudante = async (id) => { 
    await pool.query("DELETE FROM estudantes WHERE id = $1", [id]);
    return { message: "Estudante deletado com sucesso." };
}
module.exports = { getEstudantes, getEstudanteById, createEstudante, updateEstudante, deleteEstudante }; 