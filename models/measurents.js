const Model = require("../utils/model");
const mongoose = require('mongoose');

class measurentModel extends Model {
  constructor() {
    super("measurents", {userId: mongoose.ObjectId, weight: Number, bust:  Number, thigh: Number, waist: Number, arm: Number, hip: Number, observation: String});
  }

  async createMeasurent(measurent){
    const measurents = await new this.collection({...measurent});
    await measurents.save();
    return measurents
  }

  async listId(Id){
    const list = await this.collection.find({userId: Id});
    return list;
  }
}
module.exports = new measurentModel();