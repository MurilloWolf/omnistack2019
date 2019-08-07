const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const server = express();

mongoose.connect(
  "mongodb+srv://mwolf:mwolf1234@cluster0-vosuw.mongodb.net/omnistack8?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

/* O express por padrão nao vem com o entendimento de Json
Entao é necessário  dizer ao express que a forma de comunicação
sera por Json -> server.use(express.json())*/
server.use(express.json());
//permitir conecxao com o REACT
server.use(cors());
server.use(routes);
server.listen(3333);
