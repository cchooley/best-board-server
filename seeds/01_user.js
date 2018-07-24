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
      committees: []
    },
    {
      id: 2,
      name: 'Deb Persoff',
      email: 'https://tinyurl.com/yalfcd39',
      organization: 'Vintage Theatre',
      role: 'Executive Board',
      password: authUtils.hashPassword('theater'),
      memberSince: 2015,
      termExpires: 2020,
      committees: []
    },
    {
      id: 3,
      name: 'Stasia Vinnedge',
      image: 'https://tinyurl.com/y9c9xrm4',
      email: 'sscs@icloud.com',
      organization: 'Vintage Theatre',
      role: 'Board Member',
      password: authUtils.hashPassword('stasia'),
      memberSince: 2015,
      termExpires: 2020,
      committees: []
    },
    {
      id: 4,
      name: 'Bernie Cardell',
      image: 'https://tinyurl.com/y9n2pf8y',
      email: 'bernster74@hotmail.com',
      organization: 'Vintage Theatre',
      role: 'Board Member',
      password: authUtils.hashPassword('bernie'),
      memberSince: 2015,
      termExpires: 2020,
      committees: []
    }
  ]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE user_id_seq RESTART WITH 4;");
  });
};