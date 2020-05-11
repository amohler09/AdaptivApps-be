  
  function participants(parent, args, context) {
    return context.prisma.announcement({ id: parent.id }).participants();
  };
  
  module.exports = {
    participants
  };