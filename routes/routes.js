import { Router } from "../deps.js";
import * as todoController from "./controllers/todoController.js";
import * as collectionController from "./controllers/collectionController.js";

const router = new Router();

router.get("/", ({ response }) => response.redirect("/collections"));

router.get("/collections", collectionController.listCollections);
router.post("/collections", collectionController.addCollection);
router.get("/collections/:collectionId", collectionController.showCollection);

router.post("/collections/:collectionId/todos", todoController.addTodo);
router.post(
  "/collections/:collectionId/todos/:todoId/remove",
  todoController.removeTodo
);

export default router.routes();
