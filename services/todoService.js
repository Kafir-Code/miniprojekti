import { executeQuery } from "../database/database.js";

const create = async (task, collectionId) => {
  await executeQuery(
    "INSERT INTO todos (task, collection_id) VALUES ($1, $2)",
    task,
    collectionId
  );
};

const findAllByCollectionId = async (collectionId) => {
  const result = await executeQuery(
    "SELECT * FROM todos WHERE collection_id = $1",
    collectionId
  );
  return result.rows;
};

const remove = async (todoId, collectionId) => {
  await executeQuery(
    "DELETE FROM todos WHERE id = $1 AND collection_id = $2",
    todoId,
    collectionId
  );
};

export { create, findAllByCollectionId, remove };
