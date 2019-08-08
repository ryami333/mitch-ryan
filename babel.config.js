module.exports = {
    presets: [
        [
            'babel-preset-gatsby',
            {
                targets: {
                    browsers: ['last 4 versions', 'not ie <= 11'],
                },
            },
        ],
        '@babel/preset-typescript',
    ],
};
