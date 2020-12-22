/*
 * @Description: db配置
 * @Usage: 包括database、redis配置信息
 * @Author: richen
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2020-12-22 15:49:47
 */

export default {
    /*database config*/
    database: {
        db_type: 'mysql', //support  postgresql,mysql...
        db_host: '127.0.0.1',
        db_port: 3306,
        db_name: 'test',
        db_user: 'root',
        db_pwd: '',
        db_prefix: '',
        db_charset: 'utf8'
    },

    // redis: {
    //     key_prefix: '', //缓存key前置
    //     timeout: null, //数据缓存有效期，单位: 秒
    //     host: '127.0.0.1',
    //     port: 6379,
    //     password: '',
    //     db: '0'
    // }
};