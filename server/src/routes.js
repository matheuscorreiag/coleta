import express from "express";
import multer from "multer";

const routes = express.Router();
const UserController = require("./controllers/UserController");
const ItemsController = require("./controllers/ItemsController");
const LoginController = require("./controllers/LoginController");
const multerConfig = require("./config/multer");

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);
routes.post("/image", multer(multerConfig).single("file"), (req, res) => {
  console.log(req.file);

  return res.json({ hello: "rocket" });
});
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

routes.get("/items-ready", ItemsController.ready);
routes.get("/items-broke", ItemsController.index);
routes.post("/items", ItemsController.create);
routes.delete("/items/:id", ItemsController.delete);
routes.get("/searchresults", ItemsController.index);

routes.post("/login", LoginController.authenticate);
export default routes;
