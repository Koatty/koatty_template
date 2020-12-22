/*
 * @Description: 配置数据
 * @Usage: 静态配置数据信息
 * @Author: richen
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2020-12-22 15:52:10
 */
export default {
    /*app config*/
    app_port: 3000, // 监听端口
    app_hostname: '', // Hostname
    encoding: 'utf-8', //输出数据的编码

    logs_write: true, // Whether to store logs
    logs_path: process.env.ROOT_PATH + "/logs", // Log file directory
    logs_level: "WARN", // Log storage level, "DEBUG" | "INFO" | "WARN" | "ERROR"
};