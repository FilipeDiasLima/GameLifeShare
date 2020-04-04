const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const UsersControllers = require('./controllers/UsersControllers');
const LoginControllers = require('./controllers/LoginControllers');

const routes = express.Router();

//login
routes.post('/login',celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  })
}), LoginControllers.create);

//criar usuario
routes.post('/users', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  })
}), UsersControllers.create);

//listar todos os usuarios
routes.get('/users', UsersControllers.index);

//listar um unico usuario
routes.get('/users/:id', UsersControllers.indexInd);

//deletar usuarios
routes.delete('/users/:id', UsersControllers.delete);

module.exports = routes;