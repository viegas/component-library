module.exports = {
    watchPathIgnorePatterns: ['node_modules'],
    testRegex: '\\.test.js$',
    setupFilesAfterEnv: ['./.enzyme.setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
