const { AuthenticationError } = require('apollo-server') 
// --------------------------------------------------------------------- Chat Subscription ---------------------------------------------------------------------
/**
 * @param {{ where: import('../generated/prisma-client').ChatSubscriptionWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
function newChatSubscribe (parent, args, context, info) {
  if (typeof context.user === 'undefined') {
    context.logger.error('API called by unauthenticated user')
    throw new AuthenticationError('Must be authenticated')
  }
  context.logger.debug('Subscription.chat: %O', context.user)

  return context.prisma.$subscribe.chat({ mutation_in: ['CREATED', 'UPDATED', 'DELETED']})
  }


/**
 * @param {{ where: import('../generated/prisma-client').ChatRoomSubscriptionWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
function newChatRoomSubscribe (parent, args, context, info) {
  if (typeof context.user === 'undefined') {
    context.logger.error('API called by unauthenticated user')
    throw new AuthenticationError('Must be authenticated')
  }
  context.logger.debug('Subscription.chat: %O', context.user)

  return context.prisma.$subscribe.chatRoom({ mutation_in: ['CREATED', 'UPDATED', 'DELETED']})
  }

// --------------------------------------------------------------------- Announcement Subscription ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').AnnouncementSubscriptionWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
function newAnnouncementSubscribe (parent, args, context, info) {
  if (typeof context.user === 'undefined') {
    context.logger.error('API called by unauthenticated user')
    throw new AuthenticationError('Must be authenticated')
  }
  context.logger.debug('Subscription.announcement: %O', context.user)

  return context.prisma.$subscribe.announcement({ mutation_in: ['CREATED', 'UPDATED', 'DELETED']})
 }

// --------------------------------------------------------------------- Notification Subscription ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').NotificationSubscriptionWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
function newNotificationSubscribe (parent, args, context, info) {
  if (typeof context.user === 'undefined') {
    context.logger.error('API called by unauthenticated user')
    throw new AuthenticationError('Must be authenticated')
  }
  context.logger.debug('Subscription.notification: %O', context.user)

  return context.prisma.$subscribe.notification({ mutation_in: ['CREATED', 'UPDATED', 'DELETED']})
  }

// --------------------------------------------------------------------- Profile Subscription ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ProfileSubscriptionWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
function newProfileSubscribe (parent, args, context, info) {
  if (typeof context.user === 'undefined') {
    context.logger.error('API called by unauthenticated user')
    throw new AuthenticationError('Must be authenticated')
  }
  context.logger.debug('Subscription.profile: %O', context.user)

  return context.prisma.$subscribe.profile({ mutation_in: ['CREATED', 'UPDATED', 'DELETED']})
}

// CHAT SUBSCRIPTION RETURN
const chat = {
  subscribe: newChatSubscribe,
  resolve: payload => {
    return payload
  }
 }

// CHAT ROOM SUBSCRIPTION RETURN
const chatRoom = {
  subscribe: newChatRoomSubscribe,
  resolve: payload => {
    return payload
  }
}

// ANNOUNCEMENT SUBSCRIPTION RETURN
const announcement = {
  subscribe: newAnnouncementSubscribe,
  resolve: payload => {
    return payload
  }
}

// NOTIFICATIONS SUBSCRIPTION RETURN
const notification = {
  subscribe: newNotificationSubscribe,
  resolve: payload => {
    return payload
  }
}

// PROFILE SUBSCRIPTION RETURN
const profile = {
  subscribe: newProfileSubscribe,
  resolve: payload => {
    return payload
  }
}

module.exports = {
  chat,
  chatRoom,
  announcement, 
  notification,
  profile
}
