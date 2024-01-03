/*
 * @Description: 静态文件服务中间件
 * @Usage: 提供静态文件服务
 * @Author: xxx
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2024-01-04 07:50:07
 */

import { Middleware } from 'koatty';
import { App } from '../App';
import { KoattyStatic } from "koatty_static";

@Middleware()
export class StaticMiddleware {
  run(options: any, app: App) {
    return KoattyStatic(options, app);
  }
}