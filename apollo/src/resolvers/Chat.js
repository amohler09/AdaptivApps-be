function from(parent, args, context) {
  console.log(parent);
  return context.prisma.profile({ id: parent.id }).from();
};

function room(parent, args, context) {
  return context.prisma.profile({ id: parent.id }).room();
};

module.exports = {
  from,
  room
};