const Model = require("../utils/model");

class clientModel extends Model {
  constructor() {
    super("clients", {name: 'string', phone: 'string'});
  }

  async create(client){
    const id = await new this.collection({...client});
    await id.save();
    return id
  }

  async list(){
    const list = await this.collection.find({});
    return list
  }
}
module.exports = new clientModel();