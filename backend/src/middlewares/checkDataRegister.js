const registerValidation = require('../validators/register');
const emailAlreadyExists = require('../utils/emailAlreadyExists');
const userAlreadyExists = require('../utils/userAlreadyExists');

async function checkDataRegister(req, res, next){
    const {error} = registerValidation(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const emailExist = await emailAlreadyExists(req.body);
    if (emailExist) return res.status(400).send('Email already exists');

    const userExist = await userAlreadyExists(req.body);
    if (userExist) return res.status(400).send('User already exists');

    return next();
}

module.exports = checkDataRegister;