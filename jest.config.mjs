export default {
    moduleFileExtensions: [
        'mjs',
        'js',
    ],
    testMatch: ['**/?(*.)+(spec|test).(m)js'],

    collectCoverageFrom: [
        '**/app.mjs',
        '**/handlers/**/*.mjs',
      ],
    verbose: true,
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branch: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
};