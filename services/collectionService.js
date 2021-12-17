import { executeQuery } from "../database/database.js";

const create = async (name) => {
  await executeQuery("INSERT INTO collections (name) VALUES ($1)", name);
};

const findAll = async () => {
  const res = await executeQuery("SELECT * FROM collections");
  return res.rows;
};

const findOne = async (id) => {
  const res = await executeQuery("SELECT * FROM collections WHERE id = $1", id);
  if (res.rows.length === 1) {
    return res.rows[0];
  }
  return null;
};

export { create, findAll, findOne };
