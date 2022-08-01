const ApiError = require("../utils/apiError");
const measurentsModel = require('../models/measurents');

class measurentsController {
  async create(body){
    const measurents = await measurentsModel.createMeasurent(body);
    return measurents
  }
}


module.exports = new measurentsController();