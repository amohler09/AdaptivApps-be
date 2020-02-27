const { prisma } = require('../apollo/src/generated/prisma-client');
var faker = require('faker');

async function main() {
  // Generate a bunch of random users
  for (var i = 0; i < 10; i++) {
    await prisma.createProfile({
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      displayName: faker.internet.userName(),
      birthday: faker.date.past(),
      bio: faker.lorem.words(),
      disability: 'None',
      legal: true,
    });
  }
}

main().catch(e => console.error(e));
