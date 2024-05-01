/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@pinit/eslint-config/next.js"],
  parserOptions: {
    project: true,
  },
};
