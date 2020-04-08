exports.up = function(knex) {
    return knex.schema.createTable('likesUserPosts', function(table){
        table.string('userId').notNullable();
        table.integer('postId').notNullable();
        
        table.foreign('userId').references('id').inTable('users');
        table.foreign('postId').references('id').inTable('posts');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('likesUserPosts');
};
