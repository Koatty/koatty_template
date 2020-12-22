/*
 * @Author: richen
 * @Date: 2020-12-22 15:35:07
 * @LastEditors: linyyyang<linyyyang@tencent.com>
 * @LastEditTime: 2020-12-22 15:36:46
 * @License: BSD (3-Clause)
 * @Copyright (c) - <richenlin(at)gmail.com>
 */

import { Koatty, Bootstrap } from "koatty";
import * as path from 'path';

// bootstrap function
@Bootstrap(() => {
  // 调整libuv线程池大小
  process.env.UV_THREADPOOL_SIZE = '128';
  // 忽略https自签名验证
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
})
// 配置组件存放目录，默认: ./
// @ComponentScan('./')
// 配置配置文件存放目录，默认: ./config
// @ConfigurationScan('./config')
export class App extends Koatty {
  // 重写init方法，用于服务初始化前置
  public init() {
    // 服务运行目录
    this.rootPath = path.dirname(__dirname);
    // 线上环境请将debug模式关闭，即：appDebug:false
    this.appDebug = true;
  }
}
