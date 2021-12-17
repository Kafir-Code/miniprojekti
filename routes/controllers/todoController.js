import * as todoService from "../../services/todoService.js";

const addTodo = async ({ params, request, response }) => {
  const body = request.body();
  const formData = await body.value;
  const task = formData.get("task").trim();
  await todoService.create(task, params.collectionId);

  response.redirect("/collections/" + params.collectionId);
};

const removeTodo = async ({ params, response }) => {
  await todoService.remove(params.todoId, params.collectionId);
  response.redirect("/collections/" + params.collectionId);
};

export { addTodo, removeTodo };
