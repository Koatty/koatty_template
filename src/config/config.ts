/*
 * @Description: 配置数据
 * @Usage: 静态配置数据信息
 * @Author: xxx
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2021-06-24 16:39:22
 */
export default {
    /*app config*/
    app_port: 3000, // 监听端口
    app_hostname: '', // Hostname
    encoding: 'utf-8', //输出数据的编码

    // logs_level: "INFO", // Level log is printed to the console, "DEBUG" | "INFO" | "WARN" | "ERROR"
    logs_console: true, // Whether to console logs
    logs_write: false, // Whether to store logs
    logs_write_level: "WARN", // Level log is printed to the file, "DEBUG" | "INFO" | "WARN" | "ERROR"
    logs_path: process.env.ROOT_PATH + "/logs", // Log file directory
};