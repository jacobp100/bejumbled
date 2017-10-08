module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.ios.js', '.android.js'],
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [2, { 'devDependencies': true }],
    'no-shadow': [0],
    'react/jsx-filename-extension': [0],
    'react/prop-types': [0]
  }
};
