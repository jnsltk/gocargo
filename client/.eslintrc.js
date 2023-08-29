module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/multi-word-component-names': 'off'
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  // Workaround to prevent false positive error "eslint (vue/comment-directive)" in plain HTML:
  // https://github.com/vuejs/eslint-plugin-vue/issues/1355#issuecomment-735557202
  overrides: [
    {
      files: ['*.html'],
      processor: 'vue/.vue'
    }
  ]
}
