const ApiError = require("../utils/apiError");
const clientModel = require('../models/client');

class clientController {
  async create(body, userId){
    const create = await clientModel.create(body, userId);
    return create;
  }

  async measurents(body){
    const measurents = await measurentController.create(body);
    return measurents
  }
}


module.exports = new clientController();