const path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// 配置参数
module.exports = {
    mode: "development",
    // 入口 把index.js导入进来处理
    entry: './entry/index.js',
    output: {
        // 写一段路径，寻找output文件夹
        path: path.resolve(__dirname, 'output'),
        // 在output文件夹里面导出文件名为bundle.js
        filename: 'bundle.js'
    },
    // 传说中loaders
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.png|jpg|jpeg$/,
            use: ['url-loader']
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};