function participants(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).participants();
};

function chats(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).chats();
};

module.exports = {
  participants,
  chats
};