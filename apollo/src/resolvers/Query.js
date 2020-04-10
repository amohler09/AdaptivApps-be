// @ts-check

const { AuthenticationError } = require('apollo-server');

// Queries must be defined to return fields of the same type
// See the Query field in the type definitions for examples

// --------------------------------------------------------------------- Profile Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const profile = async (_, args, context) => {
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.profile: %O', currentUser);

  // Finding the profile based on args specification
  const profile = await context.prisma.profile(args.where);

  return profile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const profiles = async (_, args, context) => {
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.profiles: %O', currentUser);

  // Returns all profiles
  const profile = await context.prisma.profiles(args);

  return profile;
};

// --------------------------------------------------------------------- Event Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const event = async (_, args, context) => {
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.event: %O', currentUser);

  // Returns all profiles
  const event = await context.prisma.event(args.where);
  return event;
};

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const events = async (_, args, context) => {
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.events: %O', currentUser);

  // Returns all profiles
  const event = await context.prisma.events(args);

  return event;
};

// --------------------------------------------------------------------- Activity Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const activity = async (_, args, context) => {
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.activity: %O', currentUser);

  // Returns all profiles
  const activity = await context.prisma.activity(args.where);

  return activity;
};

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const activities = async (_, args, context) => {
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.activities: %O', currentUser);

  // Returns all profiles
  const activity = await context.prisma.activities(args);

  return activity;
};

<<<<<<< HEAD
// ------------------------------------- PARTICIPANTS QUERY ----------------------------
=======
// --------------------------------------------------------------------- Participant Query ---------------------------------------------------------------------

>>>>>>> c9816fb06e3735f2963a2cade719e68d6d3eb877
/**
 * @param {{ where: import('../generated/prisma-client').ParticipantWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const participant = async (_, args, context) => {
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
<<<<<<< HEAD
  context.logger.debug('Query.activity: %O', currentUser);

  // Returns a participant
=======
  context.logger.debug('Query.participant: %O', currentUser);

  // Returns all profiles
>>>>>>> c9816fb06e3735f2963a2cade719e68d6d3eb877
  const participant = await context.prisma.participant(args.where);

  return participant;
};

/**
 * @param {{ where: import('../generated/prisma-client').ParticipantWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const participants = async (_, args, context) => {
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
<<<<<<< HEAD
  context.logger.debug('Query.activities: %O', currentUser);

  // Returns all participants
=======
  context.logger.debug('Query.participants: %O', currentUser);

  // Returns all profiles
>>>>>>> c9816fb06e3735f2963a2cade719e68d6d3eb877
  const participant = await context.prisma.participants(args);

  return participant;
};

<<<<<<< HEAD

=======
>>>>>>> c9816fb06e3735f2963a2cade719e68d6d3eb877
module.exports = {
  profile,
  profiles,
  event,
  events,
  activity,
  activities,
<<<<<<< HEAD
  participant,
  participants
=======
  participants,
  participant,
>>>>>>> c9816fb06e3735f2963a2cade719e68d6d3eb877
};
