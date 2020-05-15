function profile(parent, args, context) {
    return context.prisma.chat({ id: parent.id }).profile();
  };
  
  module.exports = {
    profile
  };