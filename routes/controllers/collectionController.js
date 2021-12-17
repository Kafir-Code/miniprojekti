import * as collectionService from "../../services/collectionService.js";
import * as todoService from "../../services/todoService.js";
import { renderFile } from "../../deps.js";

const addCollection = async ({ request, response }) => {
  const body = request.body();
  const formData = await body.value;
  const task = formData.get("name").trim();
  await collectionService.create(task);

  response.redirect("/collections");
};

const listCollections = async ({ response }) => {
  response.body = await renderFile("../views/collections.eta", {
    collections: await collectionService.findAll(),
  });
};

const showCollection = async ({ params, response }) => {
  response.body = await renderFile("../views/collection.eta", {
    collection: await collectionService.findOne(params.collectionId),
    todos: await todoService.findAllByCollectionId(params.collectionId),
  });
};

export { listCollections, addCollection, showCollection };
