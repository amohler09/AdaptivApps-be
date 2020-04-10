function event(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).event();
}

function athletes(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).athletes();
}

function coaches(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).coaches();
}

function volunteers(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).volunteers();
}

function other(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).other();
}

function participants(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).participants();
}

module.exports = {
  event,
  athletes,
  coaches,
  volunteers,
  other,
  participants,
};
