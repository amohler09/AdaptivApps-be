    function participants(parent, args, context) {
    return context.prisma.announcement({ id: parent.id }).participants();
  };
  
  function notifications(parent, args, context) {
    console.log(parent);
    return context.prisma.announcement({ id: parent.id }).notifications();
  };

  module.exports = {
    participants, 
    notifications
  };