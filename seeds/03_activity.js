exports.seed = function (knex, Promise) {
  return knex("activity").del().then(() => {
    return knex("activity").insert([{
      id: 1,
      activity: 'New Poll',
      openedOn: new Date(),
      title: 'Should Vintage Theatre purchase its current building from the city of Aurora?',
      createdBy: 'Conor Hooley',
      image: 'https://tinyurl.com/ycc9cak8'
    }]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE activity_id_seq RESTART WITH 2;");
  });
};