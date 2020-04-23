const { PubSub, withFilter } = require('graphql-subscriptions')
const { AuthenticationError } = require('apollo-server') 
const pubsub = new PubSub()

// --------------------------------------------------------------------- Chat Subscription ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ChatSubscriptionWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const newChat = {
  subscribe: async (_, args, context) => {
    if (typeof context.user === 'undefined') {
      context.logger.error('API called by unauthenticated user')
      throw new AuthenticationError('Must be authenticated')
    }
    context.logger.debug('Subscription.chat: %O', context.user)

    return pubsub.asyncIterator(['CREATED', 'UPDATED', 'DELETED'])
  }
}

module.exports = {
  newChat
}
