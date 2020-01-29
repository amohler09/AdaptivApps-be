const router = require('express').Router();

const Users = require('./users-modal');
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

module.exports = router;