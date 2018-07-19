const authUtils = require('../utils/auth')

exports.seed = function (knex, Promise) {
  return knex("user").del().then(() => {
    return knex("user").insert([{
      id: 1,
      name: 'Conor Hooley',
      image: 'https://tinyurl.com/ycc9cak8',
      email: 'cchooley@gmail.com',
      organization: 'Vintage Theatre',
      role: 'Board Member',
      password: authUtils.hashPassword('password'),
      memberSince: 2014,
      termExpires: 2020,
      committees: [],
      voteHistory: []
    },
    {
      id: 2,
      name: 'Deb Persoff',
      email: 'mpersoff@aol.com',
      organization: 'Vintage Theatre',
      role: 'President',
      password: authUtils.hashPassword('theater'),
      memberSince: 2012,
      termExpires: 2020,
      committees: [],
      voteHistory: []
    }
  ]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE user_id_seq RESTART WITH 3;");
  });
};