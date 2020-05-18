function profile (parent, args, context) {
  return context.prisma.participant({ id: parent.id }).profile()
}
function role (parent, args, context) {
  return context.prisma.participant({ id: parent.id }).role()
}
function activity (parent, args, context) {
  return context.prisma.participant({ id: parent.id }).activity()
}

module.exports = {
  profile,
  role,
  activity
}
