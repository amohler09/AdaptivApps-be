const { AuthenticationError } = require('apollo-server') 


// --------------------------------------------------------------------- Chat Subscription ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ChatSubscriptionWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */


function newChatSubscribe(parent, args, context, info) {
  if (typeof context.user === 'undefined') {
    context.logger.error('API called by unauthenticated user')
    throw new AuthenticationError('Must be authenticated')
  }
  context.logger.debug('Subscription.chat: %O', context.user)

  return context.prisma.$subscribe.chat({ mutation_in: ['CREATED', 'UPDATED', 'DELETED']})
}

const chat = {
  subscribe: newChatSubscribe,
  resolve: payload => {
    return payload
  }
}

module.exports = {
  chat
}
