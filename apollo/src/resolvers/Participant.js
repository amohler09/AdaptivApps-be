function profile(parent, args, context) {
  return context.prisma.participant({ id: parent.id }).profile();
}
function role(parent, args, context) {
  return context.prisma.participant({ id: parent.id }).role();
}

module.exports = {
  profile,
  role,
};
