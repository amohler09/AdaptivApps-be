//@ts-check

const { AuthenticationError } = require('apollo-server');




// --------------------------------------------------------------------- Profile Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').ProfileCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createProfile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createProfile: %O', currentUser);

  // Creates a profile based on args data
  const profile = await context.prisma.createProfile(args.data);

  return profile;
};

/**
 * @param {{ data: import('../generated/prisma-client').ProfileUpdateInput, where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateProfile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.updateProfile: %O', currentUser);
  // Updates a profile with args passed in
  const profile = await context.prisma.updateProfile(args);

  return profile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteProfile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteProfile: %O', currentUser);
  // Deletes a profile with args passed in
  const profile = await context.prisma.deleteProfile(args.where);

  return profile;
};

// --------------------------------------------------------------------- Event Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').EventCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createEvent = (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('Api called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createEvent: %O', currentUser);
  // Creates an event based on args data
  const event = context.prisma.createEvent(args.data);

  return event;
};

/**
 * @param {{ data: import('../generated/prisma-client').EventUpdateInput, where: import('../generated/prisma-client').EventWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateEvent = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateEvent: %O', currentUser);
  // Updates an event with args passed in
  const event = await context.prisma.updateEvent(args);

  return event;
};

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteEvent = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteEvent: %O', currentUser);
  // Deletes an Event with args passed in
  const event = await context.prisma.deleteEvent(args.where);

  return event;
};

// --------------------------------------------------------------------- Event Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').ActivityCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createActivity = (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.createActivity: %O', currentUser);
  // Creates an activity based on args data
  const activity = context.prisma.createActivity(args.data);

  return activity;
};
/**
 * @param {{ data: import('../generated/prisma-client').ActivityUpdateInput, where: import('../generated/prisma-client').ActivityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateActivity = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateActivity: %O', currentUser);
  // Updates an activity with args passed in
  const activity = await context.prisma.updateActivity(args);

  return activity;
};

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteActivity = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteActivity: %O', currentUser);
  // Deletes an activity with args passed in
  const activity = await context.prisma.deleteActivity(args.where);

  return activity;
};

/**
 * @param {{ data: import('../generated/prisma-client').ParticipantCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createParticipant = (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.createParticipant: %O', currentUser);
  // Creates a participant based on args data
  const participant = context.prisma.createParticipant(args.data);

  return participant;
};
/**
 * @param {{ data: import('../generated/prisma-client').ParticipantUpdateInput, where: import('../generated/prisma-client').ParticipantWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateParticipant = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateParticipant: %O', currentUser);
  // Updates a participant with args passed in
  const participant = await context.prisma.updateParticipant(args);

  return participant;
};

/**
 * @param {{ where: import('../generated/prisma-client').ParticipantWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteParticipant = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteParticipant: %O', currentUser);
  // Deletes a participant with args passed in
  const participant = await context.prisma.deleteParticipant(args.where);

  return participant;
};

// --------------------------------------------------------------------- Chat Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').ChatCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createChat = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createChat: %O', currentUser);
  // Creates a chat
  const chat = await context.prisma.createChat(args.data);

  return chat;
};

/**
 * @param {{ data: import('../generated/prisma-client').ChatUpdateInput, where: import('../generated/prisma-client').ChatWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateChat = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateChat: %O', currentUser);
  // Updates a chat
  const chat = await context.prisma.updateChat(args);

  return chat;
};

/**
 * @param {{ where: import('../generated/prisma-client').ChatWhereUniqueInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteChat = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteChat: %O', currentUser);
  // Deletes a chat
  const chat = await context.prisma.deleteChat(args.where);

  return chat;
};

/**
 * @param {{ data: import('../generated/prisma-client').ChatRoomCreateInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createChatRoom = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createChatRoom: %O', currentUser);
  // Creates a chat room
  const room = await context.prisma.createChatRoom(args.data);

  return room;
};

/**
 * @param {{ data: import('../generated/prisma-client').ChatRoomUpdateInput, where: import('../generated/prisma-client').ChatRoomWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateChatRoom = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateChatRoom: %O', currentUser);
  // Updates a chat room
  const room = await context.prisma.updateChatRoom(args);

  return room;
};

/**
 * @param {{ where: import('../generated/prisma-client').ChatRoomWhereUniqueInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteChatRoom = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteChatRoom: %O', currentUser);
  // Deletes a chat room
  const room = await context.prisma.deleteChatRoom(args.where);

  return room;
};

module.exports = {
  createProfile,
  updateProfile,
  deleteProfile,
  createEvent,
  updateEvent,
  deleteEvent,
  createActivity,
  updateActivity,
  deleteActivity,
  createParticipant,
  updateParticipant,
  deleteParticipant,
  createChat,
  updateChat,
  deleteChat,
  createChatRoom,
  updateChatRoom,
  deleteChatRoom
};
