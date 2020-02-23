const { prisma } = require('../apollo/src/generated/prisma-client');
var faker = require('faker');

async function main() {
  // Generate a bunch of random users
  for (var i = 0; i < 10; i++) {
    await prisma.createProfile({});
  }
}

main().catch(e => console.error(e));
