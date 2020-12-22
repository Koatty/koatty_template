/*
 * @Description  : tkoatty-jwt中间件
 * @usage        : 封装使用tkoatty-jwt中间件
 * @Date         : 2020-05-12 00:08:19
 * @Author       : xxx<xxx@tencent.com>
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-22 15:54:59
 * @FilePath     : /tkoatty-template-default/src/middleware/JwtMiddleware.ts
 */

import { Middleware, IMiddleware } from 'koatty';
import { App } from '../App';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jwt = require('think_jwt');

@Middleware()
export class JwtMiddleware implements IMiddleware {
  run(options: any, app: App) {
    return jwt(options, app);
  }
}
