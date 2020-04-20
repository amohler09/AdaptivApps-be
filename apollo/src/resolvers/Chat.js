function from(parent, args, context) {
  console.log(parent);
  return context.prisma.profile({ id: parent.id }).from();
};

function recipient(parent, args, context) {
  return context.prisma.profile({ id: parent.id }).recipient();
};

function room(parent, args, context) {
  return context.prisma.profile({ id: parent.id }).room();
};

module.exports = {
  from,
  recipient,
  room
};