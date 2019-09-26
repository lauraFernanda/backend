const express = require("express");

const routes = express.Router();

const UsuariosController = require("./controllers/UsuariosControllers");

routes.post("/usuario", UsuariosController.store); 

routes.get("/usuario/:email", UsuariosController.index); 

module.exports = routes;
