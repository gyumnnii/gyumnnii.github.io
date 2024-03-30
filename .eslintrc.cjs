module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: false,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import', 'prettier', 'solid'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:solid/typescript'],
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    env: {
      browser: true,
    },
    ignorePatterns: ['**/dist', '**/node_modules', '**/spec', '**/scripts', '**/*.js', '**/examples'],
    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/ban-types': [
        'error',
        {
          'types': {
            Function: false, // Function 타입 허용
          }
        }
      ],
      '@typescript-eslint/no-shadow': 'error',
      "@typescript-eslint/no-unused-vars": ["error", { "ignoreRestSiblings": true }],
      'consistent-return': 'off',
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-param-reassign': 'off',
      'max-len': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'no-underscore-dangle': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'object-curly-newline': [
        'error',
        {
          consistent: true,
        },
      ],
      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          singleQuote: true,
          semi: true,
          useTabs: false,
          tabWidth: 2,
          arrowParens: 'always',
          trailingComma: 'all',
          parser: 'typescript',
          endOfLine: 'auto',
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.spec.*', '**/*.stories.*', '**/.storybook/**/*.*', '**/*.d.ts'],
        },
      ],
      'import/prefer-default-export': 'off',
      'no-useless-constructor': 'off',
      'class-methods-use-this': 'off',
      'import/no-import-module-exports': 'off',
      'react/function-component-definition': 'off',
      "sort-imports": [
        "warn",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling"],
          pathGroups: [
            {
              "pattern": "@components/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@constants/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@containers/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@helpers/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@hooks/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@pages/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@styles/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@shared/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@server-csr/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@server/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@client/**",
              "group": "internal",
              "position": "after"
            },
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'enum',
          format: ['PascalCase'],
        },
      ],
    },
    overrides: [
      {
        files: ['index.d.ts', 'solid.d.ts'],
        rules: {
          'import/newline-after-import': 'off',
        },
      },
    ],
  };
  