module.exports = {
  extends: ["./base.js"],
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
          { group: "internal", pattern: "@actions/**" },
          { group: "internal", pattern: "@prismaClient" },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
  },
};
