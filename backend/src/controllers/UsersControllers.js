const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {

  async create (request, response) {
    const {name, username, email, password} = request.body;
  
    const id = generateUniqueId();
    
    await connection('users').insert({
      id,
      name,
      username,
      email,
      password,
    });
  
    return response.json({ id });
  },

  async index (request, response){
    const users = await connection('users')
      .select('*');

    return response.json(users)
  },

  async indexInd (request, response){
    const { id } = request.params;
    const user = await connection('users')
      .where('id',id)
      .select('*')
      .first();

    return response.json(user)
  },

  async delete(request, response){
    const { id } = request.params;
    const user = await connection('users')
      .where('id',id)
      .select('*')
      .first()

    await connection('users')
      .where('id',id)
      .delete();

    return response.status(204).send();
  }
}