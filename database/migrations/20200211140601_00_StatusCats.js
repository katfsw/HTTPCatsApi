
exports.up = function(knex) {
    return knex.schema.createTable('httpcats', cats=> {
        cats
        .increments();
  
        cats
        .string('status_code',128)
        .notNullable()
        .unique()
  
        cats
        .string('code_name',128)
        .notNullable()

        cats
        .string('code_desc',128)
        .notNullable()

        cats
        .string('imageurl', 128)
        .notNullable()
  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('httpcats');
};
