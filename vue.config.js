module.exports = {

    //前端Server和接口代理
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api/*': {
               target:'http://localhost:3000'
            }
        }
    },
    //项目的基本路径
    // publicPath:'/',
    //项目的生成目录
    // outputDir:'',
    //修改index.html的路径
    // indexPath:'',
    //文件名是否需要哈希
    // filenameHashing:true,
    //eslint语法检查，保存时使用
    // lintOnSave:false,
    //是否启用sourceMap  是否屏蔽源码
    // productionSourceMap:true


}
