exports.seed = function (knex, Promise) {
  return knex("activity").del().then(() => {
    return knex("activity").insert([{
      id: 1,
      activity: 'created a poll',
      openedOn: "07/15/2018",
      title: 'Should Vintage Theatre purchase its current building from the city of Aurora?',
      createdBy: 'Conor Hooley',
      image: 'https://tinyurl.com/ycc9cak8'
    },
    {
      id: 2,
      activity: 'created a profile',
      openedOn: "07/20/2018",
      title: null,
      createdBy: 'Stasia Vinnedge',
      image: 'https://tinyurl.com/y9c9xrm4'
    },
    {
      id: 3,
      activity: 'paid yearly dues',
      openedOn: "07/22/2018",
      title: null,
      createdBy: 'Margaret Norwood',
      image: 'https://tinyurl.com/y9yslrys'
    },
    {
      id: 4,
      activity: 'uploaded a new file',
      openedOn: "07/22/2018",
      title: null,
      createdBy: 'Bernie Cardell',
      image: 'https://tinyurl.com/y9n2pf8y'
    }
  ]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE activity_id_seq RESTART WITH 3;");
  });
};