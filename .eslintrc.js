module.exports = {
    extends: ["eslint:recommended", "plugin:node/recommended"],
    plugins: ["node"],
    parserOptions: {
        sourceType: "module"
    },
    env: {
        es6: true
    }
};