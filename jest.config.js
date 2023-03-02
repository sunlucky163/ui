module.exports = {
    ...require('./config/base/jest.config'),
    rootDir: '.',
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
