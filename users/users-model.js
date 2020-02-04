const db = require('../data/dbConfig');

module.exports = {
  get,
  getBy,
  getById,
  add,
  editUser,
  deleteUser,
};

// Users
function get() {
  return db('users')
    .select('id', 'email', 'role_id');
};

function getBy(filter) {
  return db('users')
    .where(filter)
    .first();
};

function getById(id) {
  return db('users')
    .where({ id })
    .first();
};

async function add(user) {
  const [id] = await db('users')
    .insert(user, 'id')

    return getById(id)
};

function editUser(changes, id) {
  return db('users')
    .where({ id })
    .update(changes, 'id')
};

function deleteUser(id) {
  return db('users')
    .where({ id })
    .del();
};
