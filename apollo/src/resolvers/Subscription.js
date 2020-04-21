const { PubSub, withFilter } = require('graphql-subscriptions');
const {
  CHAT_CREATED,
  CHAT_UPDATED,
  CHAT_DELETED,
  CHATROOM_CREATED,
  CHATROOM_UPDATED,
  CHATROOM_DELETED
} = require('./variables');

const pubsub = new PubSub();

// --------------------------------------------------------------------- Chat Subscription ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ChatSubscriptionWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const chatSubscription = async (_, args, context) => {
  const currentUser = context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Subscription.chat: %O', currentUser);

  // Subscribe to a new chat
  withFilter(
    () => pubsub.asyncIterator(CHAT_CREATED),
    newChat = await context.prisma.chat(args)
  )

  return newChat;
};

module.exports = {
  NEW_CHANNEL_MESSAGE,
  chatSubscription
}