const connection = require('../database/connection');

module.exports = {
  async create(request, response){
    const {username, password} = request.body;

    const user_username = await connection('users')
      .where('username',username)
      .select('username')
      .first();

    const user_password = await connection('users')
      .where('password',password)
      .select('password')
      .first();

    if(!user_username || !user_password){
      return response.status(400).json({error:'Username or Password incorret'});

    }

    return response.json({user_username, user_password});
  }
}