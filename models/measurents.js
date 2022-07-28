const Model = require("../utils/model");
const mongoose = require('mongoose');

class measurentModel extends Model {
  constructor() {
    super("measurents", {id: mongoose.ObjectId, bust:  Number, thigh: Number, waist: Number, arm: Number, hip: Number, observation: String});
  }

  async createMeasurent(measurent){
    const measurent = await new this.collection({...measurent});
    await id.save();
    return measurent
  }
}
module.exports = new measurentModel();