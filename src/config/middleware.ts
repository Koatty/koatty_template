/*
 * @Description: 中间件配置
 * @usage: 配置待加载的中间件及加载顺序, 中间件在middleware目录下引入
 * @Author: richen
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2020-12-22 15:56:58
 */

export default {
    list: ["JwtMiddleware", "ViewMiddleware"], //加载的中间件列表
    config: { //中间件配置
        // 静态服务器中间件默认未开启
        StaticMiddleware: false,
        // 需要开启请修改为:
        // StaticMiddleware: {
        //     cache: true
        // },
        JwtMiddleware: {
            alg: 'HS256', // 算法
            sub: 'jwt', // 主题
            exp: 86400, // 过期时间, now() + 86400
            key: 'TKoatty',
        },
        ViewMiddleware: {
            view_path: `${process.env.ROOT_PATH}/view`, // 模板目录
            engine_type: 'ejs', // 模版引擎名称 ejs, pug
            engine_config: { cache: true }, // 模版引擎配置
            content_type: 'text/html', // 模版输出类型
            file_suffix: '.html', // 模版文件名后缀
            file_depr: '_', // controller和action之间的分隔符
            default_theme: 'default', // 默认模板主题
        },
    }
};