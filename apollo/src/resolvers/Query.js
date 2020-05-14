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
  const currentUser = await context.user;
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
  const currentUser = await context.user;
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
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.event: %O', currentUser);

  // Finding an event based on args specification
  const event = await context.prisma.event(args.where);
  return event;
};

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const events = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.events: %O', currentUser);

  // Returns all events
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
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.activity: %O', currentUser);

  // Finding an activity based on args specification
  const activity = await context.prisma.activity(args.where);

  return activity;
};

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const activities = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.activities: %O', currentUser);

  // Returns all activities
  const activity = await context.prisma.activities(args);

  return activity;
};

// --------------------------------------------------------------------- Participant Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ParticipantWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const participant = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.participant: %O', currentUser);

  // Finding the participant based on args specification
  const participant = await context.prisma.participant(args.where);

  return participant;
};

/**
 * @param {{ where: import('../generated/prisma-client').ParticipantWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const participants = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.participants: %O', currentUser);

  // Returns all participants
  const participant = await context.prisma.participants(args);

  return participant;
};

// --------------------------------------------------------------------- Chat Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ChatWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const chats = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.chats: %O', currentUser);

  // Returns all chats
  const chats = await context.prisma.chats(args);

  return chats;
};

/**
 * @param {{ where: import('../generated/prisma-client').ChatRoomWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const chatRooms = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.chatRooms: %O', currentUser);

  // Returns all chat rooms
  const chatRooms = await context.prisma.chatRooms(args);

  return chatRooms;
};

// --------------------------------------------------------------------- Announcement Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').AnnouncementWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const announcements = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.announcements: %O', currentUser);

  // Returns all chats
  const announcements = await context.prisma.announcements(args);

  return announcements;
};

// --------------------------------------------------------------------- Notifications Query ---------------------------------------------------------------------
/**
 * @param {{ where: import('../generated/prisma-client').NotificationWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const notifications = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.notifications: %O', currentUser);

  // Returns all chats
  const notifications = await context.prisma.notifications(args);

  return notifications;
};

module.exports = {
  profile,
  profiles,
  event,
  events,
  activity,
  activities,
  participants,
  participant,
  chats,
  chatRooms,
  announcements, 
  notifications,
};
