export default {
    moduleFileExtensions: [
        'mjs',
        'js',
    ],
    testMatch: ['**/?(*.)+(spec|test).(m)js'],
    verbose: true,
    coverageThreshold: {
        global: {
            branch: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
};