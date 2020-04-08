const connection = require('../database/connection');

module.exports = {
    async indexId(request, require){
        const { id } = request.params;

        const posts = await connection('comments')
            .where('postId',id)
            .select('*')

        return response.json(posts)
    },

    async create(request, response){
        const { body, postId } = request.body;
        const { userId } = request;
        const createdAt = new Date().toISOString();

        const [id] = await connection('comments').insert({
            body,
            createdAt,
            postId,
            userId,
        });

        response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('comments')
          .where('id', id)
          .delete();
    
        return response.status(204).send();
    }
}