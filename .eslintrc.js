module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    '@nuxt/eslint-config'
  ],
  env: {
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true
  },
  rules: {
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': 'off'
  }
};
