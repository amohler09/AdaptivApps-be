// @ts-check

// Queries must be defined to return fields of the same type
// See the Query field in the type definitions for examples

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const profile = async (_, args, context) => {
  console.log("Query.profile.args: %j", args)

  const profile = await context.prisma.profile(args.where);

  console.log("Query.profile: %j", profile)
  
  return profile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const profiles = async (_, args, context) => {
  console.log("Query.profiles.args should be empty: %j", args)

  const profile = await context.prisma.profiles(args);
  const user = await context.user;
  console.log("Query.profiles: %j", profile)
  console.log("The user is", user)
  return profile;
};

module.exports = {
  profile,
  profiles
};
