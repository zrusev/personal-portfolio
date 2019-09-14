const defaultPresets = [
    "@babel/preset-react",
    {
        "useBuiltIns": 'usage',
    },

];

const prodPresets = [
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
];

const presets = [ defaultPresets ];
const plugins = [
    [
        "@babel/plugin-syntax-class-properties",
    ],
    [
        "@babel/plugin-proposal-class-properties",
    ],
    [ 
        "react-hot-loader/babel"
    ] 
];

if (process.env.NODE_ENV.trim() === "production") {
    presets.push(prodPresets);
}

module.exports = { presets, plugins };