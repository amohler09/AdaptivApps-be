function activities(parent, args, context) {
  console.log(parent);
  return context.prisma.profile({ email: parent.email }).activities();
}

function events(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).events();
}

module.exports = {
  activities,
  events,
};
