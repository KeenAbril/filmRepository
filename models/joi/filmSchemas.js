const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports.selectFilmSchema = Joi.object({
  id: Joi.objectId().required(),
});

/* module.exports.selectAllSchema = Joi.object({
  active: Joi.boolean().optional(),
  skip: Joi.number().integer().optional(),
  limit: Joi.number().integer().optional(),
}).and('skip', 'limit'); */

module.exports.createUserSchema = Joi.object({
  title: Joi.string().alphanum().min(2).max(50).required(),
  sinopsis: Joi.string().min(2).max(120).required(),
  director: Joi.string().regex(/^[a-zA-Z]+$/).min(2).max(120).required(),
  releasedDate: Joi.date().required(),
  actors: Joi.array().items(Joi.object({
    firstName: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(20).required(),
    lastName: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(20).required(),
  })).required()
});

module.exports.updateFilmSchema = Joi.object({
  title: Joi.string().alphanum().min(2).max(50).optional(),
  sinopsis: Joi.string().min(2).max(120).optional(),
  director: Joi.string().regex(/^[a-zA-Z]+$/).min(2).max(120).optional(),
  releasedDate: Joi.date().optional(),
  actors: Joi.array().items(Joi.object({
    firstName: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(20).optional(),
    lastName: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(20).optional(),
  })).optional()
});