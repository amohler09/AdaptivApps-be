function participants(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).participants();
};

function messages(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).messages();
};

module.exports = {
  participants,
  messages
};