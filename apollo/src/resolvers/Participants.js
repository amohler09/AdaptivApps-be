function profile(parent, args, context) {
  return context.prisma.participants({ email: parent.email }).profile();
}

module.exports = {
  profile
};