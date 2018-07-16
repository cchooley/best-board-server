exports.seed = function (knex, Promise) {
  return knex("user").del().then(() => {
    return knex("user").insert([{
      id: 1,
      name: 'Conor Hooley',
      email: 'cchooley@gmail.com',
      organization: 'Vintage Theatre',
      role: 'Board Member',
      password: 'password'
    }, {
      id: 2,
      name: 'Deb Persoff',
      email: 'mpersoff@aol.com',
      organization: 'Vintage Theatre',
      role: 'President',
      password: 'theater'
    }]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE user_id_seq RESTART WITH 3;");
  });
};