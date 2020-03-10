// We're going to use this as input, as it would be used in runtime
const profileUpdateInput = require('../generated/prisma-client')

// This is the unit under test
const { createProfile } = require('./Mutation.js')

// Grab the context and tell Jest to mock it up
const mockContext = require('../context')
jest.mock('../context')


it('Calls Prisma', async () => {
  // Add something to the input
  profileUpdateInput.email = "sometest@email"

  // We need to pass these args, just like Apollo would
  const args = { data: profileUpdateInput}

  // Wait for the createProfile (the unit under test) to complete
  await createProfile("", args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.createProfile).toHaveBeenCalledWith(profileUpdateInput)
})