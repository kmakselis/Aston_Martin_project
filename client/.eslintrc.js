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
        "newline-before-return": [1],
        "import/prefer-default-export": [0],
        "react/function-component-definition": [1, {
            "namedComponents": "arrow-function"
        }]
        // "eol-last": [2],
        // "no-multiple-empty-lines": [1, { max: 1 }]
    }
}
