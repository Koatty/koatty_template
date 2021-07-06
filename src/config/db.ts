/*
 * @Description: db配置
 * @Usage: 包括database、redis配置信息
 * @Author: xxx
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2021-07-06 17:04:05
 */

export default {
    /*database config*/
    // database: {
    //     db_type: 'mysql', //support  postgresql,mysql...
    //     db_host: '127.0.0.1',
    //     db_port: 3306,
    //     db_name: 'test',
    //     db_user: 'root',
    //     db_pwd: '',
    //     db_prefix: '',
    //     db_charset: 'utf8'
    // },

    "CacheStore": {
        type: "memory", // redis or memory
        // key_prefix: "koatty",
        // host: '127.0.0.1',
        // port: 6379,
        // name: "",
        // username: "",
        // password: "",
        // db: 0,
        // timeout: 30,
        // pool_size: 10,
        // conn_timeout: 30
    },

};