
exports.seed = function(knex) {
  return knex('attendee_types')
    .truncate()
    .then(function () {
      return knex('attendee_types').insert([
        {id: 1, 
          name: 'Athlete'},
        {id: 2, 
          name: 'Parent'},
        {id: 3, 
          name: 'Coach'},
        {id: 4, 
          name: 'Volunteer'}
      ]);
    });
};
