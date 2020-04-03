const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {

  async index (request, response){
    const users = await connection('users').select('*');

    return response.json(users)
  },

  async create (request, response) {
    const {name, email, password} = request.body;
  
    const id = generateUniqueId();
    
    await connection('users').insert({
      id,
      name,
      email,
      password,
    });
  
    return response.json({ id });
  },

  async indexInd (request, response){
    const {id} = request.params;
    const user = await connection('users')
      .where('id',id)
      .select('*')
      .first()    
    //const user = await connection.findById(request.params.id);

    return response.json(user);
  }
}