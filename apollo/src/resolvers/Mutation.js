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
  const profile = context.prisma.createProfile(args.data);
  
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
  const profile = context.prisma.updateProfile(args);
  
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
  const profile = context.prisma.deleteProfile(args.where);  

  return profile;
};

// --------------------------------------------------------------------- Event Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').EventCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createEvent = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('Api called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createEvent: %O', currentUser);
  // Creates a profile based on args data
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
  const event = context.prisma.updateEvent(args);
  
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
    throw new AuthenticationError('Must be authenticated.')
  }
  context.logger.debug('Mutation.deleteEvent: %O', currentUser);
  // Deletes an Event with args passed in
  const event = context.prisma.deleteEvent(args.where);
  
  return event;
};

// --------------------------------------------------------------------- Event Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').ActivityCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createActivity = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.createActivity: %O', currentUser);
  // Creates a profile based on args data
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
  const activity = context.prisma.updateActivity(args);
  
  return activity;
};

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const deleteActivity = async (_, args, context) => {
  // Deletes an activity with args passed in
  const activity = context.prisma.deleteActivity(args.where);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return activity;
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
};
