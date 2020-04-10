function profile(parent, args, context) {
  return context.prisma.participant({ id: parent.id }).profile();
}
function roles(parent, args, context) {
  return context.prisma.participant({ id: parent.id }).roles();
}

module.exports = {
  profile,
  roles,
};
