const { PubSub } = require('apollo-server');
const PROFILE_ADDED = 'PROFILE_ADDED';
const pubsub = new PubSub();

const profile = {
  subscribe: () => pubsub.asyncIterator([PROFILE_ADDED]),
};

module.exports = {
  profile,
};
