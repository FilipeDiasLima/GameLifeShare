const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { title, body } = request.body;
        const { userId } = request;
        const createdAt = new Date().toISOString();

        const [id] = await connection('posts').insert({
            title,
            body,
            createdAt,
            userId,
        })

        response.json({ id });
    }
}