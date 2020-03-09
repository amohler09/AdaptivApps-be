// @ts-check

// All resolvers must be imported here and declared in the resolvers
// object in order to be received by the client. If you are logging
// your resolvers but not seeing anything print to stdout, this is
// the most likely culprit

const Query = require('./Query');
const Mutation = require('./Mutation');
const Activity = require('./Activity');
const Profile = require('./Profile');
const Event = require('./Event');

const resolvers = {
  Query,
  Mutation,
  Activity,
  Profile,
  Event,
};

module.exports = resolvers;
