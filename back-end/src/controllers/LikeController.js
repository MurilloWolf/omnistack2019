const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    //pegando o id do dev que recebeu o like
    const { devId } = req.params;
    //pegando o id od dev que deu o like
    const { user } = req.headers;

    //buscando as informacoes desses usuarios no banco de dados
    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    //se tentar dar o like em um dev que nao existe, retorna erro
    if (!targetDev) {
      return res.status(400).json("dev not exist");
    }

    //se o usuario que deu o match ja tem o like de quem esta recebendo
    //aiso de match
    if (targetDev.likes.includes(loggedDev._id)) {
      console.log("match");
    }

    //adicionando um like (isso esta acontecendo apenas em memoria)
    loggedDev.likes.push(targetDev._id);
    //salvando a  alteracao no banco de dados
    await loggedDev.save();
  }
};
