const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function add(userData){
    return db('httpcats')
    .insert(userData)
}

function find() {
    return db('httpcats').select('id', 'statuscat');
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