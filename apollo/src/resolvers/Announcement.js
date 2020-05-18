function participants (parent, args, context) {
  return context.prisma.announcement({ id: parent.id }).participants()
};

function notification (parent, args, context) {
  return context.prisma.announcement({ id: parent.id }).notification()
};

module.exports = {
  participants,
  notification
}
