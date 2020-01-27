const router = require('express').Router();

const Users = require('./users-modal');
const restricted = require('../auth/authenticate-middleware');

// GET - users
// router.get('/', restricted, (req, res) => {
//   Users.get()
//     .then(users => {
//       res.status(200)
//         .json(users);
//     })
//     .catch(err => {
//       console.log('Error with users GET', err)
//       res.status(500)
//         .json({ message: 'Could get retrieve users' })
//     });      
// });

module.exports = router;