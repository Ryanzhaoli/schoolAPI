import query from "../db/utils.js";

export const findAll = async () => {
    return await query(`SELECT * FROM schools`);
};

export const findOne = async (schoolId) => {
    return await query(`SELECT * FROM schools WHERE schoolId = ?`, [schoolId]);
};

export const addOne = async (schools) => {
    return await query(`INSERT INTO schools SET ?`, [schools]);
};

export const updateOne = async (schoolId, schools) => {
    return await query('UPDATE schools SET ? WHERE schoolId = ?', [schools, schoolId]);
};

export const removeOne = async (schoolId) => {
    return await query(`DELETE FROM schools WHERE schoolId = ?`, [schoolId]);
};