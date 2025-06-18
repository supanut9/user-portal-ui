import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    // --- Import Sorting ---
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // --- Vue/Nuxt Component Structure ---
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION', // e.g., 'is', 'v-is'
          'LIST_RENDERING', // 'v-for'
          'CONDITIONALS', // 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
          'RENDER_MODIFIERS', // 'v-pre', 'v-once'
          'GLOBAL', // 'id'
          'UNIQUE', // 'ref', 'key'
          'SLOT', // 'v-slot', 'slot'
          'TWO_WAY_BINDING', // 'v-model'
          'OTHER_DIRECTIVES', // 'v-custom-directive'
          'OTHER_ATTR', // 'custom-prop', 'data-*'
          'EVENTS', // '@click', 'v-on'
          'CONTENT', // 'v-html', 'v-text'
        ],
        alphabetical: false,
      },
    ],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/no-v-html': 'warn',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    quotes: ['error', 'single'],
  },
});
