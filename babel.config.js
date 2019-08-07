module.exports = {
    presets: [
        [
            'babel-preset-gatsby',
            {
                targets: {
                    browsers: ['last 4 versions', 'not ie <= 10'],
                },
            },
        ],
        '@babel/preset-typescript',
    ],
};
