module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react/prop-types": [0],
      "react/jsx-props-no-spreading": [0],
      "newline-before-return": [1],
      "import/prefer-default-export": [0],
      "react/function-component-definition": [1, {
          "namedComponents": "arrow-function"
      }],
      "react/jsx-no-duplicate-props": [1, { "ignoreCase": false }]
  }
}
