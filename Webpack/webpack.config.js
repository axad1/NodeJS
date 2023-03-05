path = require('path')

module.exports.entry = './src/index.js'
module.exports.output = {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: false
}
module.exports.mode = 'development',
    module.exports.module = {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    }
module.exports.devServer = {
    static: './dist',
    port: 3000
}
// module.exports.optimization = {
//     runtimeChunk: 'single',
// }