const express = require('express');
const multer = require('multer');

const CommentsControllers = require('./controllers/CommentsControllers');
const UsersControllers = require('./controllers/UsersControllers');
const LoginControllers = require('./controllers/LoginControllers');
const PostsControllers = require('./controllers/PostsControllers');
const FilesControllers = require('./controllers/FilesControllers');

const multerConfig = require('./config/multer');
const hashPassword = require('./utils/hashPassword');
const auth = require('./middlewares/auth');

const checkDataRegister = require('./middlewares/checkDataRegister');
const commentEditAuth = require('./middlewares/commentEditAuth');
const postEditAuth = require('./middlewares/postEditAuth');

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

routes.get('/posts', PostsControllers.index);

routes.get('/comments/:id', CommentsControllers.indexId);

routes.use(auth); //apenas usuarios logados podem acessar as rotas abaixo

routes.post('/posts', PostsControllers.create);

routes.delete('/posts/:id', postEditAuth, PostsControllers.delete);

routes.post('/comments', CommentsControllers.create);

routes.delete('/comments/:id', commentEditAuth, CommentsControllers.delete);

module.exports = routes;