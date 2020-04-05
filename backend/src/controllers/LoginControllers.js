const emailAlreadyExists = require('../utils/emailAlreadyExists');
const checkPassword = require('../utils/checkPassword');

module.exports = {
  async create(request, response){
    const dataUser = await emailAlreadyExists(request.body);

    if (!dataUser) return response.status(400).send('Email is wrong');

    const validPass = await checkPassword(request.body.password, dataUser.password);

    if(!validPass) return response.status(400).send('password is wrong');

    return response.json(dataUser);
  }
}