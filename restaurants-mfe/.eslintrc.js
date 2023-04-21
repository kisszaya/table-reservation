module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        project: ['./tsconfig.json'],
        sourceType: 'module'
    },
    plugins: ['react', 'i18next'],
    rules: {
        'react/jsx-indent': [2, 4],
        'max-len': ['error', {
            ignoreComments: true,
            code: 100
        }],
        '@typescript-eslint/indent': 'off',
        'object-curly-spacing': ['error', 'always'],
        'i18next/no-literal-string': [2, {
            markupOnly: true,
            ignoreAttribute: ['data-testid']
        }],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4, {
            ignoredNodes: ['ConditionalExpression'],
            SwitchCase: 1
        }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        'import/order': ['error', {
            groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index']
        }],
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react/display-name': 'off'
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/*.stories.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        }
    }]
}
