const path = require('path'); // Добавьте эту строку

module.exports = {
    entry: './src/index.js', // Путь к вашему главному файлу JS
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Обрабатываем файлы с расширением .js и .jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/, // Обрабатываем все CSS файлы
                use: [
                    'style-loader', // Вставка стилей в DOM
                    {
                        loader: 'css-loader', // Преобразование CSS в CommonJS
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]', // Для CSS-модулей
                            },
                        },
                    },
                ],
            },
            {
                test: /\.scss$/, // Для SCSS файлов
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.svg$/, // Обработка SVG файлов
                use: ['@svgr/webpack', 'file-loader'], // Добавляем поддержку для SVG как компонента React
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Добавляем поддержку .jsx
    },
    mode: 'development', // Установите режим разработки
};
