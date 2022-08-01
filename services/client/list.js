const clientController = require('../../controllers/client');

const route = async (req, res)  => {

  const list = await clientController.list();

  return res.status(200).send(list); 
}

module.exports = route;