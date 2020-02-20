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

/**
 * @param {{ data: import('../generated/prisma-client').ProfileUpdateInput, where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').ProfilePromise }
 */
const updateProfile = (_, args, context) => {
  console.log("updateProfile.args: %j", args)

  const profile = context.prisma.updateProfile(args);  

  return profile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').ProfilePromise }
 */
const deleteProfile = (_, args, context) => {
  console.log("deleteProfile.args: %j", args);

  const profile = context.prisma.deleteProfile(args.where);

  return profile;
};

module.exports = {
  createProfile,
  updateProfile,
  deleteProfile
};
