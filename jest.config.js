module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testTimeout: 30000,
    setupFilesAfterEnv: ['./jest.setup.ts'],
    testMatch: ['**/tests/test_github_web.ts']
};