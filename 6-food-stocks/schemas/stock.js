import Joi from 'joi';

export const stockSchema = Joi.object({
  stock: Joi.object({
    name: Joi.string().required(),
    amount: Joi.number().required().default(0),
    price: Joi.number().required().default(0),
    type: Joi.string().valid('FOOD', 'DRINK', 'APPETIZER').default('FOOD'),
    imgPath: Joi.string().required(),
    desc: Joi.string().required(),
  }).required(),
});
