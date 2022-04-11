module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind', 'screen', 'layer'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['stepped-font-size', 'line-height-crop'],
      },
    ],
  },
}
