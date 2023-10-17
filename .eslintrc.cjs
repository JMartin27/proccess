module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [
        {
            env: {
                mode: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parseOptions: {
                sourceType: 'script',
            },
        },
    ],
    parseOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'always',
            },
        ],
    },
};