const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function () {
      return knex('users').insert([
        {id: 1,
          email: 'Tim@gmail.com',
          password: bcrypt.hashSync('abc123', 8),
          role_id: 2
        },
        {id: 2,
          email: 'Joe@gmail.com',
          password: bcrypt.hashSync('abc123', 8),
          role_id: 2
        },
        {id: 3,
          email: 'John@gmail.com',
          password: bcrypt.hashSync('abc123', 8),
          role_id: 2
        },
        {id: 4,
          email: 'Admin@gmail.com',
          password: bcrypt.hashSync('abc123', 8),
          role_id: 1
        },
      ]);
    });
};
