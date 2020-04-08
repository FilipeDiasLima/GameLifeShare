const express = require('express');
const multer = require('multer');

const UsersControllers = require('./controllers/UsersControllers');
const LoginControllers = require('./controllers/LoginControllers');
const PostsControllers = require('./controllers/PostsControllers');
const FilesControllers = require('./controllers/FilesControllers');

const multerConfig = require('./config/multer');

const hashPassword = require('./utils/hashPassword');

const auth = require('./middlewares/auth');
const checkDataRegister = require('./middlewares/checkDataRegister');

const routes = express.Router();

routes.post('/upload', multer(multerConfig).single('file'), FilesControllers.create);

routes.post('/users', checkDataRegister, async (req, res) => {
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

routes.use(auth);

routes.post('/posts', PostsControllers.create);

module.exports = routes;