module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint', 'unused-imports'],
  rules: {
    /** eslint options */
    semi: ['error', 'never'],
    'no-duplicate-imports': 'error',
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-self-compare': 'error',
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
      },
    ],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-whitespace-before-property': 'error',
    quotes: ['error', 'single'],
    'rest-spread-spacing': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'function'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'if'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'block'
      },
    ],
    /** eslint-plugin-typescript options */

    /** vue3-eslint options */
    'vue/multi-word-component-names': 'off',
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/mustache-interpolation-spacing': [
      'error',
      'always',
    ],
    'vue/no-spaces-around-equal-signs-in-attribute': [
      'error',
    ],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/component-options-name-casing': [
      'error',
      'PascalCase',
    ],
    'vue/html-button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: ['*'],
      },
    ],
    'vue/html-comment-indent': ['error', 2],
    'import/no-unresolved': ['off'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern:
              '{vue,vue-router,pinia,@vuelidate/**,msw,msw/**,jest,@jest/**,@testing-library/**,axios,js-cookie,}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{**/*.css,**/*.scss}',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
}
