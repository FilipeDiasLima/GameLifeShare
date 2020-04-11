const loginValidation = require('../validators/login');

async function loginMiddleware(req, res, next){
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    return next();
}

module.exports = loginMiddleware;