const ApiError = require("../utils/apiError");
const clientModel = require('../models/client');
const measurentsModel = require('../models/measurents');

class clientController {
  async create(body, userId){
    const create = await clientModel.create(body, userId);
    return create;
  }
  
  async list(){
    const list = await clientModel.list();
    return list;
  }

  async listId(Id){
    const listId = await measurentsModel.listId(Id);
    return listId;
  }
}


module.exports = new clientController();