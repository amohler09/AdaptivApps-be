function profile(parent, args, context) {
    return context.prisma.notification({ id: parent.id }).profile();
  };

function announcement(parent, __, context) {
  return context.prisma.notification({ id: parent.id }).announcement();
}

function chat(parent, __, context) {
  return context.prisma.notification({ id: parent.id }).chat();
}
  
  module.exports = {
    profile,
    announcement,
    chat
  };