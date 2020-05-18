// We're going to use this as input, as it would be used in runtime
const generatedPrismaInput = require('../generated/prisma-client')

// This is the unit under test
const { createProfile, createActivity, createEvent, updateProfile, updateEvent, updateActivity, deleteProfile } = require('./Mutation.js')

// Grab the context and tell Jest to mock it up
const mockContext = require('../context')
jest.mock('../context')

// --------------------------------Create Profile -------------------------------------
it('Creates profile', async () => {

  // Add something to the input
  generatedPrismaInput.email = 'sometest@email'

  // We need to pass these args, just like Apollo would
  const args = { data: generatedPrismaInput }

  // Wait for the createProfile (the unit under test) to complete
  await createProfile('', args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.createProfile).toHaveBeenCalledWith(generatedPrismaInput)
})

it('Has correct profile information', async () => {
  // Add something to the input
  generatedPrismaInput.email = 'sometest@email'
  generatedPrismaInput.firstName = 'Jimmy'
  generatedPrismaInput.lastName = 'Washington'

  // We need to pass these args, just like Apollo would
  const args = { data: generatedPrismaInput }

  // Wait for the createProfile (the unit under test) to complete
  await createProfile('', args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.createProfile).toHaveBeenCalledWith(expect.objectContaining({
    email: 'sometest@email',
    firstName: 'Jimmy',
    lastName: 'Washington'
  }))
})

//------------------------------------- Update Profile -------------------------------------

it('Updates profile', async () => {
  // Add something to the input
  generatedPrismaInput.email = 'sometest@email'
  generatedPrismaInput.firstName = 'Brandob'

  // We need to pass these args, just like Apollo would
  const args = { email: 'sometest@email', firstName: 'Brandon' }

  // Wait for the createProfile (the unit under test) to complete
  await updateProfile('', args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.updateProfile).toHaveBeenCalledWith(expect.objectContaining({
    email: 'sometest@email',
    firstName: 'Brandon'
  }))
})

//--------------------------------------- Delete Profile --------------------------------

// it('Deletes profile', async () => {
  
//   mockContext.user = {email:"test@test", name:"Ron R. Test"}

//   //generatedPrismaInput.email = "test@test"

//   console.log(mockContext.user);

//   // // We need to pass these args, just like Apollo would
//   const args = mockContext.user 

//   // const where = args.firstName;

//   // console.log(data);

//   // Wait for the createProfile (the unit under test) to complete
//   //await createProfile("", args, mockContext)
//   //await createProfile("", args, mockContext)

//   await deleteProfile(mockContext.user.email="test@test", args.where, mockContext)

//   // Be sure that the unit under test called the underlying Prisma client with the input we gave it
//   //expect(mockContext.prisma.createProfile).toHaveBeenCalledWith(generatedPrismaInput)
//   expect(mockContext.prisma.deleteProfile).toHaveBeenCalledWith(generatedPrismaInput)
// })

// ------------------------------------ Creates Event --------------------------------------


it('Creates Event', async () => {
  
  generatedPrismaInput.title = 'State Games'

  const args = { data: generatedPrismaInput }

  await createEvent('', args, mockContext)

  expect(mockContext.prisma.createEvent).toHaveBeenCalledWith(generatedPrismaInput)
})

it('Has correct profile information', async () => {
  // Add something to the input
  generatedPrismaInput.title = 'Summer Games'
  generatedPrismaInput.startDate = '04/04/2020'
  generatedPrismaInput.endDate = '04/18/2020'

  // We need to pass these args, just like Apollo would
  const args = { data: generatedPrismaInput }

  // Wait for the createProfile (the unit under test) to complete
  await createEvent('', args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.createEvent).toHaveBeenCalledWith(expect.objectContaining({
    title: 'Summer Games',
    startDate: '04/04/2020',
    endDate: '04/18/2020'
  }))
})

// ------------------------------------- Updates Event -------------------------------------------------

it('Updates Event', async () => {
  // Add something to the input
  generatedPrismaInput.title = 'Simmer Games'
  generatedPrismaInput.startDate = '04/04/2020'
  generatedPrismaInput.endDate = '04/05/2020'

  // We need to pass these args, just like Apollo would
  const args = { title: 'Summer Games', startDate: '04/04/2020', endDate: '04/18/2020' }

  // Wait for the createProfile (the unit under test) to complete
  await updateEvent('', args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.updateEvent).toHaveBeenCalledWith(expect.objectContaining({
    title: 'Summer Games', 
    startDate: '04/04/2020', 
    endDate: '04/18/2020'
  }))
})

//-------------------------------------- Creates Activity ---------------------------------------

it('Creates Activity', async () => {
  // Add something to the input
  generatedPrismaInput.name = 'Track & Field'

  // We need to pass these args, just like Apollo would
  const args = { data: generatedPrismaInput }

  // Wait for the createProfile (the unit under test) to complete
  await createActivity('', args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.createActivity).toHaveBeenCalledWith(generatedPrismaInput)
})

it('Has correct profile information', async () => {
  // Add something to the input
  generatedPrismaInput.name = 'Archery'
  generatedPrismaInput.event = 'Summer Games'
  
  // We need to pass these args, just like Apollo would
  const args = { data: generatedPrismaInput}

  // Wait for the createProfile (the unit under test) to complete
  await createActivity('', args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.createActivity).toHaveBeenCalledWith(expect.objectContaining({
    name: 'Archery',
    event: 'Summer Games'
  }))
})

//--------------------------------- Update Activity -----------------------------------

it('Updates Activity', async () => {
  // Add something to the input
  generatedPrismaInput.name = 'Super Smash Bros'
  generatedPrismaInput.startDate = '04/08/2020'
  generatedPrismaInput.location = 'Gym'
  generatedPrismaInput.event = 'Summer Games'

  // We need to pass these args, just like Apollo would
  const args = { name: 'Super Smash Bros', startDate: '04/08/2020', location: 'Gym', event: 'Summer Games' }

  // Wait for the createProfile (the unit under test) to complete
  await updateActivity('', args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.updateActivity).toHaveBeenCalledWith(expect.objectContaining({
    name: 'Super Smash Bros',
    startDate: '04/08/2020',
    location: 'Gym',
    event: 'Summer Games'
  }))
})

//-----------------------------------Join Event -------------------------------------------------------------------------
