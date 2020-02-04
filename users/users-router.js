const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/authenticate-middleware');

function checkRole(req, res, next) {
  if (req.token.role == 1) {
    next()
  } else {
    console.log('Not Authorized');
    res.status(403)
      .json({ message: 'Not authorized, you must be an ACS Admin'})
  }
};

// GET - users
router.get('/', checkRole, restricted, (req, res) => {
  Users.get()
    .then(users => {
      res.status(200)
        .json(users);
    })
    .catch(err => {
      console.log('Error with users GET', err)
      res.status(500)
        .json({ message: 'Could get retrieve users' })
    });      
});

// GET - users - byId
router.get('/:id', checkRole, restricted, (req, res) => {
  const { id } = req.params;

  Users.getById(id)
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.status(404)
          .json({ message: 'Could not find user with given id' })
      }
    })
    .catch(err => {
      console.log('Error finding user GET', err)
      res.status(500)
        .json({ message: 'Failed to get user' })
    })
});

// POST - users
router.post('/', checkRole, restricted, (req, res) => {
  const userData = req.body;

  if (userData) {
    Users.add(userData)
      .then(newUser => {
        res.status(201)
          .json({ newUser, message: 'New user created' })
      })
      .catch(err => {
        console.log('Error adding new user', err)
        res.status(404)
          .json({ message: 'Please provide required information' })
      })
  } else {
    console.log('Error posting new user', err)
    res.status(500)
      .json({ message: 'Failed to add new user' })
  }
});

// PUT - users
router.put('/:id', checkRole, restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.getById(id)
    .then(findUser => {
      if (findUser) {
        Users.editUser(changes, id)
          .then(updatedUser => {
            res.json(updatedUser)
          })
      } else {
        res.status(404)
          .json({ message: 'Could not find user with given id' })
      }
    })
    .catch(err => {
      console.log('Error updating class PUT', err)
      res.status(500)
        .json({ message: 'Failed to update user information' })
    })
});

// DELETE - users
router.delete('/:id', checkRole, restricted, (req, res) => {
  const { id } = req.params;

  Users.deleteUser(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted })
      } else {
        res.status(404)
          .json({ message: 'Could not find user with the given id' })
      }
    })
    .catch(err => {
      console.log('Error deleting user DELETE', err)
      res.status(500)
        .json({ message: 'Failed to delete user' })
    })
});

module.exports = router;