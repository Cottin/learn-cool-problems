module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["warn", "never"],
        "quotes": ["warn", "single"],
        "react/prop-types": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
