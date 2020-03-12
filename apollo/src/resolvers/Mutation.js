//@ts-check

const { AuthenticationError } = require('apollo-server');

// --------------------------------------------------------------------- Profile Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').ProfileCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createProfile = async (_, args, context) => {
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Query.profile: %O', currentUser);

  // Creates a profile based on args data
  const profile = context.prisma.createProfile(args.data);

  // This next line ensures user needs to be logged in, else return error
  
  return profile;
};

/**
 * @param {{ data: import('../generated/prisma-client').ProfileUpdateInput, where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const updateProfile = async (_, args, context) => {
  // Updates a profile with args passed in
  const profile = context.prisma.updateProfile(args);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return profile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const deleteProfile = async (_, args, context) => {
  // Deletes a profile with args passed in
  const profile = context.prisma.deleteProfile(args.where);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return profile;
};

// --------------------------------------------------------------------- Event Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').EventCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const createEvent = async (_, args, context) => {
  // Creates a profile based on args data
  const event = context.prisma.createEvent(args.data);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return event;
};

/**
 * @param {{ data: import('../generated/prisma-client').EventUpdateInput, where: import('../generated/prisma-client').EventWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const updateEvent = async (_, args, context) => {
  // Updates an event with args passed in
  const event = context.prisma.updateEvent(args);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return event;
};

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const deleteEvent = async (_, args, context) => {
  // Deletes an Event with args passed in
  const event = context.prisma.deleteEvent(args.where);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return event;
};

// --------------------------------------------------------------------- Event Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').ActivityCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const createActivity = async (_, args, context) => {
  // Creates a profile based on args data
  const activity = context.prisma.createActivity(args.data);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return activity;
};
/**
 * @param {{ data: import('../generated/prisma-client').ActivityUpdateInput, where: import('../generated/prisma-client').ActivityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const updateActivity = async (_, args, context) => {
  // Updates an activity with args passed in
  const activity = context.prisma.updateActivity(args);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

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
