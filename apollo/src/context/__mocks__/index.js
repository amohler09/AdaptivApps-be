// Generate Jest mock for the context module
const mockContext = jest.genMockFromModule('../../context');

// Generate a mock Prisma client to embed in the context mock
const mockPrismaClient = jest.genMockFromModule('../../generated/prisma-client');

// Mock the createProfile function to control it for tests
mockPrismaClient.createProfile = jest.fn();
mockContext.prisma = mockPrismaClient;

module.exports = mockContext;
