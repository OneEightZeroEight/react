const path = require('path');
// 配置参数
module.exports = {
    // 入口 把index.js导入进来处理
    entry: './entry/index.js',
    output: {
        // 写一段路径，寻找output文件夹
        path: path.resolve(__dirname, 'output'),
        // 在output文件夹里面导出文件名为bundle.js
        filename: 'bundle.js'
    }
};