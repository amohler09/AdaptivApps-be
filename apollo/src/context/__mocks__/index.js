// Generate Jest mock for the context module
const mockContext = jest.genMockFromModule('../../context');

//needed to add apollo-server and jwks-rsa

// Generate a mock Prisma client to embed in the context mock
const mockPrismaClient = jest.genMockFromModule('../../generated/prisma-client');

// Mock the createProfile function to control it for tests
mockPrismaClient.createProfile = jest.fn();
mockPrismaClient.createEvent = jest.fn();
mockPrismaClient.createActivity = jest.fn();
mockPrismaClient.updateProfile = jest.fn();
mockPrismaClient.deleteProfile = jest.fn();
mockPrismaClient.updateEvent = jest.fn();
mockPrismaClient.updateActivity = jest.fn();
mockContext.prisma = mockPrismaClient;

module.exports = mockContext;
