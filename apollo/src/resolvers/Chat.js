function from(parent, args, context) {
  console.log(parent);
  return context.prisma.chat({ id: parent.id }).from();
};

function room(parent, args, context) {
  return context.prisma.chat({ id: parent.id }).room();
};

module.exports = {
  from,
  room
};