const Joi = require('joi');
const clientController = require('../../controllers/client');

const measurentsSchema = Joi.object({
  id: Joi.required(),
  bust: Joi.number(),
  thigh: Joi.number(),
  waist: Joi.number(),
  arm: Joi.number(),
  hip: Joi.number(),
  observation: Joi.string(),
})
const measurents = async (req, res)  => {
  const {error, value} = measurentsSchema.validate(req.body);

  if(error){
    return res.status(400).send(error);
  }

  const measurents = await clientController.measurents(req.body);

  return res.status(200).send({
    success: true
  }); 
}

module.exports = measurents;