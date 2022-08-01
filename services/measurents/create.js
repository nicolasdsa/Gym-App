const Joi = require('joi');
const measurentsController = require('../../controllers/measurents');

const createSchema = Joi.object({
  userId: Joi.required(),
  weight: Joi.number(),
  bust: Joi.number(),
  thigh: Joi.number(),
  waist: Joi.number(),
  arm: Joi.number(),
  hip: Joi.number(),
  observation: Joi.string(),
})
const create = async (req, res)  => {
  const {error, value} = createSchema.validate(req.body);

  if(error){
    return res.status(400).send(error);
  }

  const measurents = await measurentsController.create(req.body);

  return res.status(200).send({
    success: true
  }); 
}

module.exports = create;