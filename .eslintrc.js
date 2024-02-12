module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb-base",
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    "plugisn": ["import"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "import/no-unresolved": [2, {commonjs: true, amd: true}],
        "import/named": 2,
        "import/namespace": 2,
        "import/default": 2,
        "import/export": 2,
    }
}
