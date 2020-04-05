const express = require('express');

const UsersControllers = require('./controllers/UsersControllers');

const registerValidation = require('./validators/register');
const emailAlreadyExists = require('./utils/emailAlreadyExists');
const hashPassword = require('./utils/hashPassword');
const checkPassword = require('./utils/checkPassword');

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

routes.post('/users', async (req, res) => {
    const {error} = registerValidation(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const emailExist = await emailAlreadyExists(req.body);

    if (emailExist) return res.status(400).send('Email already exists');

    req.body.password = await hashPassword(req.body.password);

    UsersControllers.create(req, res);
});

routes.post('/login', async (req, res) =>{
  const dataUser = await emailAlreadyExists(req.body);

  if (!dataUser) return res.status(400).send('Email is wrong');

  const validPass = await checkPassword(req.body.password, dataUser.password);

  if(!validPass) return res.status(400).send('password is wrong');

  res.send('logged in!');
});

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