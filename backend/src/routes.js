const express = require('express');

const UsersControllers = require('./controllers/UsersControllers');
const LoginControllers = require('./controllers/LoginControllers');

const registerValidation = require('./validators/register');
const emailAlreadyExists = require('./utils/emailAlreadyExists');
const userAlreadyExists = require('./utils/userAlreadyExists');
const hashPassword = require('./utils/hashPassword');

const routes = express.Router();

routes.post('/users', async (req, res) => {
    const {error} = registerValidation(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const emailExist = await emailAlreadyExists(req.body);
    if (emailExist) return res.status(400).send('Email already exists');

    const userExist = await userAlreadyExists(req.body);
    if (userExist) return res.status(400).send('User already exists');

    req.body.password = await hashPassword(req.body.password);

    UsersControllers.create(req, res);
});

routes.post('/login', LoginControllers.create);

//listar todos os usuarios
routes.get('/users', UsersControllers.index);

//listar um unico usuario
routes.get('/users/:id', UsersControllers.indexInd);

//deletar usuarios
routes.delete('/users/:id', UsersControllers.delete);

module.exports = routes;