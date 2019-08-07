const express = require("express");
const routes = express.Router();
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");

routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);
routes.get("/devs", DevController.index);
/* 
routes.get("/", (req, res) => {
  //req.query tem todos os atributos enviados pelo front
  return res.json({ message: `Hello ${req.query.name}` });
});



routes.post("/devs", (req, res) => {
  //req.body, voce tem tudo que foi enviado pelo metodo POST
  console.log(req.body);
}); */

module.exports = routes;
