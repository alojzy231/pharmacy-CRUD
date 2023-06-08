module.exports = {
  extends: ["./base.js"],
  overrides: [
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
  rules: {
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
          { group: "internal", pattern: "@api/**" },
          { group: "internal", pattern: "@features/**" },
          { group: "internal", pattern: "@components/**" },
          { group: "internal", pattern: "@const/**" },
          { group: "internal", pattern: "@dto/**" },
          { group: "internal", pattern: "@layout/**" },
        ],
        pathGroupsExcludedImportTypes: ["react"],
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
    "unicorn/prevent-abbreviations": [
      "error",
      { replacements: { props: false, ref: false } },
    ],
  },
};
