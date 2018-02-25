module.exports = {
    "at-rule-empty-line-before": [
        "always",
        {
            "except": [
                "blockless-after-same-name-blockless",
                "first-nested"
            ],
            "ignore": [
                "after-comment"
            ],
            "ignoreAtRules": [
                "import",
                "include",
                "if",
                "else",
                "for",
                "each",
                "while",
                "debug",
                "warn",
                "error"
            ]
        }
    ],
};
