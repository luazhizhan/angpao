const globals = require('globals')
const pluginJs = require('@eslint/js')
const eslintPluginJest = require('eslint-plugin-jest')
const eslintConfigPrettier = require('eslint-config-prettier')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = [
  {
    files: ['src/**/*.js'],
    plugins: {
      jest: eslintPluginJest,
    },
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.jest,
      },
    },
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
]
