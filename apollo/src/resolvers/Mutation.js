// @ts-check

/**
 * @param {{ data: import('../generated/prisma-client').ProfileCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').ProfilePromise }
 */
const createProfile = (_, args, context) => {
  console.log("createProfile.args: %j", args)

  const profile = context.prisma.createProfile(args.data);  

  return profile;
};

module.exports = {
  createProfile,
};
