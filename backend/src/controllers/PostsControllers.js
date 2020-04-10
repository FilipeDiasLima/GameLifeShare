const connection = require('../database/connection');

module.exports = {
    async index (request, response){
        const posts = await connection('posts')
          .select('*');
    
        return response.json(posts)
    },    

    async create(request, response){
        const { title, body, fileId } = request.body;
        const { userId } = request;
        const createdAt = new Date().toISOString();

        const [id] = await connection('posts').insert({
            title,
            body,
            createdAt,
            userId,
            fileId
        })

        response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('posts')
          .where('id',id)
          .delete();
    
        return response.status(204).send();
    }
}