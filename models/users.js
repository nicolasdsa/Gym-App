const Model = require("../utils/model");
const { ObjectId } = require("mongoose");

class UsersModel extends Model {
  constructor() {
    super("users", {email: 'string', password: 'string', username: 'string'});
  }

  async create(user){
    const id = await this.collection({...user}).save();
    return id
  }

  async getUser(userEmail) {
    const usersData = await this.collection.findOne({email: userEmail}).exec();
    return usersData;
  }

}

module.exports = new UsersModel();