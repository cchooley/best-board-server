const authUtils = require('../utils/auth')

exports.seed = function (knex, Promise) {
  return knex("user").del().then(() => {
    return knex("user").insert([{
      id: 1,
      name: 'Conor Hooley',
      image: 'https://tinyurl.com/ycc9cak8',
      email: 'cchooley@gmail.com',
      organization: 'Vintage Theatre',
      role: 'Admin',
      password: authUtils.hashPassword('password'),
      memberSince: 2014,
      termExpires: 2019,
      committees: [],
      voteHistory: []
    },
    {
      id: 2,
      name: 'Deb Persoff',
      email: 'mpersoff@aol.com',
      organization: 'Vintage Theatre',
      role: 'Executive Board',
      password: authUtils.hashPassword('theater'),
      memberSince: 2015,
      termExpires: 2020,
      committees: [],
      voteHistory: []
    },
    {
      id: 3,
      name: 'Stasia Vinnedge',
      email: 'sscs@icloud.com',
      organization: 'Vintage Theatre',
      role: 'Board Member',
      password: authUtils.hashPassword('stasia'),
      memberSince: 2015,
      termExpires: 2020,
      committees: [],
      voteHistory: []
    }
  ]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE user_id_seq RESTART WITH 4;");
  });
};