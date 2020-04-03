const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const UsersControllers = require('./controllers/UsersControllers');

const routes = express.Router();

//criar usuario
routes.post('/users', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  })
}), UsersControllers.create);

//listar todos os usuarios
routes.get('/users', UsersControllers.index);
//listar um unico usuario
routes.get('/users/:id', UsersControllers.indexInd);

module.exports = routes;