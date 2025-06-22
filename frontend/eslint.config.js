const react = require("eslint-plugin-react");

module.exports = [
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true,
        es2021: true,
        node: true,
        React: true,
      },
    },
    rules: {
      "react/prop-types": "off",
    },
  },
];