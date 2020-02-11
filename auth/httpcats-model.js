const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function add(data){
    return db('httpcats')
    .insert(data)
}

function find() {
    return db('httpcats').select('id', 'status_code', 'code_name', 'code_desc', 'imageurl');
}

function findBy(filter) {
    return db('httpcats').where(filter);
}

function findById(id) {
    return db('httpcats')
    .where({ id })
    .first();
}

function update(changes, id) {
    return db('httpcats')
      .where({ id })
      .update(changes);
};

function remove(id) {
    return db('httpcats')
      .where('id', Number(id))
      .del();
}