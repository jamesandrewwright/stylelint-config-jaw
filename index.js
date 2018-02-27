const merge = require('merge');

module.exports = {
    extends: "stylelint-config-standard",
    plugins: [
        "stylelint-scss"
    ],
    rules: merge(
        require('./rules/at-rule'),
        require('./rules/block'),
        require('./rules/color'),
        require('./rules/comment'),
        require('./rules/declaration'),
        require('./rules/function'),
        require('./rules/general'),
        require('./rules/property'),
        require('./rules/rule'),
        require('./rules/scss'),
        require('./rules/selector'),
        require('./rules/string'),
        require('./rules/value')
    )
};