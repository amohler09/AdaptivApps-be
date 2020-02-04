
exports.seed = function(knex) {
  return knex('user_profiles')
    .truncate()
    .then(function () {
      return knex('user_profiles').insert([
        {id: 1, 
          username: 'Tim', 
          firstname: 'New', 
          lastname: 'Guy', 
          disability_id: 1,
          gender_id: 1, 
          dob: 01/20/1991, 
          bio: 'I am one of the first users in this app!!',
          underage: false,
          parent_id: null,
          user_id: 1
        },
        {id: 2, 
          username: 'Joe', 
          firstname: 'New', 
          lastname: 'Guy', 
          disability_id: 1,
          gender_id: 1, 
          dob: 01/20/1992, 
          bio: 'I am one of the first users in this app!!',
          underage: false,
          parent_id: null,
          user_id: 2
        },
        {id: 3, 
          username: 'John', 
          firstname: 'New', 
          lastname: 'Guy', 
          disability_id: 1,
          gender_id: 1, 
          dob: 01/20/1993, 
          bio: 'I am one of the first users in this app!!',
          underage: false,
          parent_id: null,
          user_id: 3
        },
        {id: 4, 
          username: 'Admin', 
          firstname: 'Admin', 
          lastname: 'Admin', 
          disability_id: null,
          gender_id: 1, 
          dob: 01/20/1993, 
          bio: 'I am the admin!!',
          underage: false,
          parent_id: null,
          user_id: 4
        },
      ]);
    });
};
