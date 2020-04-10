function profile(parent, args, context) {
  return context.prisma.participants({ id: parent.id }).profile();
}
function roles(parent, args, context) {
  return context.prisma.participants({ id: parent.id }).roles();
}

module.exports = {
  profile,
  roles,
};
