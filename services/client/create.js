const Joi = require('joi');
const clientController = require('../../controllers/client');

const createSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().max(11).regex(/^\d+$/).required()
})
const create = async (req, res)  => {
  const {error, value} = createSchema.validate(req.body);

  if(error){
    return res.status(400).send(error);
  }

  const create = await clientController.create(req.body, req.user.id);

  return res.status(200).send({
    success: true
  }); 
}

module.exports = create;
