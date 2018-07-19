const authUtils = require('../utils/auth')

exports.seed = function (knex, Promise) {
  return knex("vote").del().then(() => {
    return knex("vote").insert([{
      id: 1,
      name: 'Buy Building',
      openedOn: new Date(),
      closedOn: null,
      createdBy: 'Conor Hooley',
      issue: 'Should Vintage Theatre purchase its current building from the city of Aurora?',
      option1: "Yes",
      option2: "No",
      option3: "Abstain",
      yesVote: 0,
      votedYes: [],
      noVote: 0,
      votedNo: [],
      abVote: 0
    }]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE vote_id_seq RESTART WITH 2;");
  });
};