const db = require('../data/dbConfig');

module.exports = {
  get,
  getBy,
  getById,
  add,
  editUser,
  deleteUser,
  getProfileByUserId,
  // addProfile,
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
    .select('id', 'email', 'role_id')
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

// USER PROFILES
function getProfileByUserId(id) {
  return db("user_profiles")
  // .select('user_profiles.id', 'user_profiles.username')
  // .where('user_profiles.user_id', id);
  .where({user_id: id});
}

// function addProfile(user_id, profile) {
//   return db("user_profiles as profiles")
//   .where({ user_id })
//   .first()
//   .insert(profile)
// }
