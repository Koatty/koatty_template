/*
 * @Description: 静态文件服务中间件
 * @Usage: 提供静态文件服务
 * @Author: xxx
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2023-11-11 11:40:26
 */

import { Middleware, IMiddleware } from 'koatty';
import { App } from '../App';
import { Static } from "koatty_static";

@Middleware()
export class StaticMiddleware implements IMiddleware {
  run(options: any, app: App) {
    return Static(options, app);
  }
}