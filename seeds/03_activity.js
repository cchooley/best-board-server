exports.seed = function (knex, Promise) {
  return knex("activity").del().then(() => {
    return knex("activity").insert([{
      id: 1,
      activity: 'created a poll',
      openedOn: new Date(),
      title: 'Should Vintage Theatre purchase its current building from the city of Aurora?',
      createdBy: 'Conor Hooley',
      image: 'https://tinyurl.com/ycc9cak8'
    },
    {
      id: 2,
      activity: 'created a profile',
      openedOn: new Date(),
      title: null,
      createdBy: 'Stasia Vinnedge',
      image: 'https://tinyurl.com/y9c9xrm4'
    }
  ]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE activity_id_seq RESTART WITH 3;");
  });
};