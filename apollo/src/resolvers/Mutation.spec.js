// We're going to use this as input, as it would be used in runtime
const profileUpdateInput = require('../generated/prisma-client')
const activityUpdateInput = require('../generated/prisma-client')
const eventUpdateInput = require('../generated/prisma-client')

// This is the unit under test
const { createProfile, createActivity, createEvent, updateProfile, updateEvent, updateActivity, deleteProfile } = require('./Mutation.js')

// Grab the context and tell Jest to mock it up
const mockContext = require('../context')
jest.mock('../context')


// --------------------------------Create Profile -------------------------------------

it('Creates profile', async () => {
  // Add something to the input
  profileUpdateInput.email = "sometest@email"

  // We need to pass these args, just like Apollo would
  const args = { data: profileUpdateInput}

  // Wait for the createProfile (the unit under test) to complete
  await createProfile("", args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.createProfile).toHaveBeenCalledWith(profileUpdateInput)
})

it('Has correct profile information', async () => {
  // Add something to the input
  profileUpdateInput.email = "sometest@email";
  profileUpdateInput.firstName = "Jimmy"
  profileUpdateInput.lastName = "Valmer"


  // We need to pass these args, just like Apollo would
  const args = { data: profileUpdateInput}

  // Wait for the createProfile (the unit under test) to complete
  await createProfile("", args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.createProfile).toHaveBeenCalledWith(expect.objectContaining({
    email: "sometest@email",
    firstName: "Jimmy",
    lastName: "Valmer"
  }))
})

//------------------------------------- Update Profile -------------------------------------

it('Updates profile', async () => {
  // Add something to the input
  profileUpdateInput.email = "sometest@email"
  profileUpdateInput.firstName = "Brandob"

  // We need to pass these args, just like Apollo would
  const args = { email: "sometest@email", firstName: "Brandon"}

  // Wait for the createProfile (the unit under test) to complete
  await updateProfile("", args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.updateProfile).toHaveBeenCalledWith(expect.objectContaining({
    email: "sometest@email",
    firstName: "Brandon",
  
  }))
})

//--------------------------------------- Delete Profile --------------------------------

// it('Deletes profile', async () => {
//   // Add something to the input
//   profileUpdateInput.email = "sometest@email"
//   profileUpdateInput.firstName = "Delete Me"
//   profileUpdateInput.lastName = "Plz"

//   // console.log(data);

//   // // We need to pass these args, just like Apollo would
//   const args = { data: profileUpdateInput }

//   // const where = args.firstName;

//   // console.log(data);

//   // Wait for the createProfile (the unit under test) to complete
//   //await createProfile("", args, mockContext)
//   await createProfile("", args, mockContext)

//   await deleteProfile(email="sometest@email", args, mockContext)

//   // Be sure that the unit under test called the underlying Prisma client with the input we gave it
//   //expect(mockContext.prisma.createProfile).toHaveBeenCalledWith(profileUpdateInput)
//   expect(mockContext.prisma.deleteProfile).toHaveBeenCalledWith(profileUpdateInput)
// })

// ------------------------------------ Creates Event --------------------------------------


it('Creates Event', async () => {
  
  eventUpdateInput.title = "State Games"

  const args = { data: eventUpdateInput }

  await createEvent("", args, mockContext)

  expect(mockContext.prisma.createEvent).toHaveBeenCalledWith(eventUpdateInput)
})

it('Has correct profile information', async () => {
  // Add something to the input
  eventUpdateInput.title = "Summer Games";
  eventUpdateInput.startDate = "04/04/2020"
  eventUpdateInput.endDate = "04/18/2020"


  // We need to pass these args, just like Apollo would
  const args = { data: eventUpdateInput}

  // Wait for the createProfile (the unit under test) to complete
  await createEvent("", args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.createEvent).toHaveBeenCalledWith(expect.objectContaining({
    title: "Summer Games",
    startDate: "04/04/2020",
    endDate: "04/18/2020"
  }))
})

// ------------------------------------- Updates Event -------------------------------------------------

it('Updates Event', async () => {
  // Add something to the input
  eventUpdateInput.title = "Simmer Games"
  eventUpdateInput.startDate = "04/04/2020"
  eventUpdateInput.endDate = "04/05/2020"

  // We need to pass these args, just like Apollo would
  const args = { title: "Summer Games", startDate : "04/04/2020", endDate: "04/18/2020"}

  // Wait for the createProfile (the unit under test) to complete
  await updateEvent("", args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.updateEvent).toHaveBeenCalledWith(expect.objectContaining({
    title: "Summer Games", 
    startDate : "04/04/2020", 
    endDate: "04/18/2020"
  
  }))
})

//-------------------------------------- Creates Activity ---------------------------------------

it('Creates Activity', async () => {
  // Add something to the input
  activityUpdateInput.name = "Track & Field"

  // We need to pass these args, just like Apollo would
  const args = { data: activityUpdateInput}

  // Wait for the createProfile (the unit under test) to complete
  await createActivity("", args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.createActivity).toHaveBeenCalledWith(activityUpdateInput)
})

it('Has correct profile information', async () => {
  // Add something to the input
  activityUpdateInput.name = "Archery"
  activityUpdateInput.event = "Summer Games"
  


  // We need to pass these args, just like Apollo would
  const args = { data: eventUpdateInput}

  // Wait for the createProfile (the unit under test) to complete
  await createActivity("", args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.createActivity).toHaveBeenCalledWith(expect.objectContaining({
    name : "Archery",
    event : "Summer Games"
  }))
})

//--------------------------------- Update Activity -----------------------------------

it('Updates Activity', async () => {
  // Add something to the input
  activityUpdateInput.name = "Super Smash Bros"
  activityUpdateInput.startDate = "04/08/2020"
  activityUpdateInput.location = "Gym"
  activityUpdateInput.event = "Summer Games"

  // We need to pass these args, just like Apollo would
  const args = { name : "Super Smash Bros", startDate : "04/08/2020", location : "Gym", event : "Summer Games"
}

  // Wait for the createProfile (the unit under test) to complete
  await updateActivity("", args, mockContext)

  // Be sure that the unit under test called the underlying Prisma client with the input we gave it
  expect(mockContext.prisma.updateActivity).toHaveBeenCalledWith(expect.objectContaining({
    name: "Super Smash Bros", 
    startDate : "04/08/2020", 
    location : "Gym",
    event : "Summer Games"
  }))
})

