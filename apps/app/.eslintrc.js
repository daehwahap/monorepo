module.exports = {
  root: true,
  extends: ['@pinit/eslint-config/react-native.js'],
  parserOptions: {
    project: true,
  },
  rules: {
    'class-methods-use-this': 'off',

    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: ['external', 'internal'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-native/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@pinit/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
}
