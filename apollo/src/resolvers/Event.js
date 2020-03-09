function activities(parent, args, context) {
  return context.prisma.event({ id: parent.id }).activities();
}

function attendees(parent, args, context) {
  return context.prisma.event({ id: parent.id }).attendees();
}

module.exports = {
  activities,
  attendees,
};
