const userAlreadyExists = require('../utils/userAlreadyExists');
const checkPassword = require('../utils/checkPassword');

module.exports = {
  async create(request, response){
    const dataUser = await userAlreadyExists(request.body);

    if (!dataUser) return response.status(400).send('Username is wrong');

    const validPass = await checkPassword(request.body.password, dataUser.password);

    if(!validPass) return response.status(400).send('password is wrong');

    return response.json(dataUser);
  }
}