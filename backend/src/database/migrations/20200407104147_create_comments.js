exports.up = function(knex) {
    return knex.schema.createTable('comments', function(table){
        table.increments()
        table.text('body').notNullable();
        table.specificType('createdAt', 'DATETIME(6)');
        table.integer('postId').notNullable();
        table.string('userId').notNullable();
        table.string('fileId');
        
        table.foreign('postId').references('id').inTable('posts');
        table.foreign('userId').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
