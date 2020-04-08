const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { body, postId } = request.body;
        const { userId } = request;
        const createdAt = new Date().toISOString();

        const [id] = await connection('posts').insert({
            body,
            createdAt,
            postId,
            userId,
        });

        response.json({ id });
    }
}