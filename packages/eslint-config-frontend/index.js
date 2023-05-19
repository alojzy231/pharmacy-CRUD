module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: [".eslintrc.js", "jest.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/prefer-module": "off",
      },
    },
    {
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    },
    {
      files: ["next-env.d.ts", "environment.d.ts"],
      rules: {
        "unicorn/prevent-abbreviations": "off",
      },
    },
  ],
  plugins: ["sort-destructure-keys", "sort-keys-fix"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "arrow-body-style": ["error"],
    "import/newline-after-import": ["error", { count: 1 }],
    "import/order": [
      "error",
      {
        alphabetize: { caseInsensitive: true, order: "asc" },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          ["sibling", "index"],
        ],
        "newlines-between": "always",
        pathGroups: [
          { group: "internal", pattern: "@features/**" },
          { group: "internal", pattern: "@components/**" },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", next: "return", prev: "*" },
      { blankLine: "always", next: "*", prev: ["const", "let", "var"] },
      {
        blankLine: "any",
        next: ["const", "let", "var"],
        prev: ["const", "let", "var"],
      },
    ],
    "react/function-component-definition": [
      2,
      { namedComponents: "function-declaration" },
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      { children: "never", props: "never" },
    ],
    "react/jsx-sort-props": "error",
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-keys-fix/sort-keys-fix": "error",
    "unicorn/filename-case": "off",
    "unicorn/no-null": "off",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      { replacements: { props: false, ref: false } },
    ],
    "unicorn/expiring-todo-comments": "off",
  },
};
