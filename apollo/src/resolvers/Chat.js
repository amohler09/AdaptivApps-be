function from(parent, args, context) {
  console.log(parent);
  return context.prisma.chat({ id: parent.id }).from();
};

function room(parent, args, context) {
  return context.prisma.chat({ id: parent.id }).room();
};

function notification(parent, args, context) {
  return context.prisma.chat({ id: parent.id }).notification();
};

module.exports = {
  from,
  room,
  notification
};