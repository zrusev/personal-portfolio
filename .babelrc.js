module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "modules": false,
                "spec": true,
                "useBuiltIns": "usage",
                "debug": false,
                "exclude": [
                    "@babel/plugin-proposal-unicode-property-regex"
                ],
                "corejs": {
                    "version": 3,
                    "proposals": false,
                },
            }
        ],
        [
            "@babel/preset-react",
            {
                "useBuiltIns": 'usage',
            },
        ]
    ],
    "plugins": [
        [
            "@babel/plugin-syntax-class-properties",
        ],
        [
            "@babel/plugin-proposal-class-properties",
        ]
    ]

}