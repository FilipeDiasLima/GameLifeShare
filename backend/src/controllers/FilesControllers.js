const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { originalname, size, filename, path } = request.file;
        const postId =  3;

        const [id] = await connection('files').insert({
            name: originalname,
            key: filename,
            size,
            url: path,
            postId
        })

        response.json({ id, originalname, path });
    }
}