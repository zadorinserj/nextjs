module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'max-len': 'warn',
        'indent': [2, 4, { SwitchCase: 1 }],
        'jsx-quotes': [2, 'prefer-single'],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-curly-spacing': [2, { when: 'always', children: true }],
        "react/static-property-placement": 0,
        'react/prefer-stateless-function': 0,
        'react/jsx-props-no-spreading': 'warn',
        'no-useless-constructor': 0,
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/alt-text': 'warn',
        "import/prefer-default-export": 'off',
    }
};
