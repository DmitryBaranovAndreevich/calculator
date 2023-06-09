module.exports = {
   settings: {
      'import/core-modules': ['redux', 'redux-thunk'],
   },
   extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:prettier/recommended',
      'plugin:import/recommended',
   ],
   plugins: ['react', '@typescript-eslint', 'jest', 'prettier'],
   env: {
      browser: true,
      es6: true,
      jest: true,
      node: 1,
   },
   globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
   },
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
   },
   rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      quotes: [2, 'single', { avoidEscape: true }],
      'linebreak-style': 'off',
      'prettier/prettier': [
         'error',
         {
            endOfLine: 'auto',
         },
      ],
   },
}
