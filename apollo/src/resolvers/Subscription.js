// @ts-check

/**
 * @param {{ where: import('../generated/prisma-client').ProfileSubscriptionWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const profile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  //const user = await context.user;
  console.log('Hitting here');
  const subscribed = await context.prisma.$subscribe
    .profile({ mutation_in: ['CREATED'] })
    .node();
  return subscribed;
};

module.exports = {
  profile,
};
