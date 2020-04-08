const userAlreadyExists = require('../utils/userAlreadyExists');
const checkPassword = require('../utils/checkPassword');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  async create(request, response){
    const dataUser = await userAlreadyExists(request.body);

    if (!dataUser) return response.status(400).send('Password or email is wrong');

    const validPass = await checkPassword(request.body.password, dataUser.password);

    if(!validPass) return response.status(400).send('Password or email is wrong');

    const token = jwt.sign( {id: dataUser.id}, process.env.TOKEN_SECRET,{
      expiresIn: '7d'
    });

    const {name, username, email} = dataUser;

    return response.json({
      user: {
        name,
        username,
        email
      },
      token
    });
  }
}
