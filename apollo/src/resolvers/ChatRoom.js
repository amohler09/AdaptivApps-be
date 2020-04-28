function participants(parent, args, context) {
  return context.prisma.chatRoom({ id: parent.id }).participants();
};

function chats(parent, args, context) {
  return context.prisma.chatRoom({ id: parent.id }).chats();
};

module.exports = {
  participants,
  chats
};