module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['unicorn', 'import', 'prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    node: true,
    es2024: true,
  },

  rules: {
    curly: 'error', // Enforce braces on "if"/"for"/etc.
    // Avoid accidental use of "==" instead of "===".
    eqeqeq: 'error',
    camelcase: ['error', { properties: 'never' }],
    'class-methods-use-this': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'ignore',
      },
    ],
    'no-case-declarations': 'off',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'off',
    'no-mixed-operators': 'off',
    'func-names': 'off',
    'max-classes-per-file': 'off',
    'operator-assignment': ['error', 'never'],

    // For overloading (and typescript throws when dupe members anyway)
    'no-dupe-class-members': 'off',

    // Causes issues with enums
    'no-shadow': 'off',

    // prettier things
    'prettier/prettier': 'error',

    'import/extensions': 'off',
    'import/prefer-default-export': 'off',

    '@typescript-eslint/no-namespace': 'error',
    // TODO: '@typescript-eslint/no-floating-promises': 'error', // Promises must catch errors or be awaited.
    // TODO? '@typescript-eslint/no-unsafe-assignment': 'error',
    // TODO? '@typescript-eslint/no-unsafe-return': 'error',
    // TODO? '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Rules from https://github.com/sindresorhus/eslint-plugin-unicorn
    // TODO: 'unicorn/no-useless-promise-resolve-reject': 'error',
    // TODO: 'unicorn/prefer-event-target': 'error',
    // TODO: 'unicorn/prefer-string-slice': 'error',
    // TODO? 'unicorn/custom-error-definition': 'error',
    // TODO? 'unicorn/prefer-json-parse-buffer': 'error',
    // TODO? ESM modules https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
    // 'unicorn/prefer-module': 'error',
    // 'unicorn/no-null': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/no-unnecessary-polyfills': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-blob-reading-methods': 'error',
    'unicorn/prefer-code-point': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/prefer-native-coercion-functions': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-type-error': 'error',
  },

  settings: {
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts'] } },
  },
};
