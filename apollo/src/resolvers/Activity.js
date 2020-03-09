function event(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).event();
}

function participants(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).participants();
}

module.exports = {
  event,
  participants,
};
