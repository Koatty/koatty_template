/*
 * @Description  : tkoatty-view中间件
 * @usage        : 封装使用tkoatty-view中间件
 * @Date         : 2020-05-12 00:08:19
 * @Author       : xxx<xxx@tencent.com>
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-22 15:55:25
 * @FilePath     : /tkoatty-template-default/src/middleware/ViewMiddleware.ts
 */

import { Middleware, IMiddleware } from 'koatty';
import { App } from '../App';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const views = require('think_view');

@Middleware()
export class ViewMiddleware implements IMiddleware {
  run(options: any, app: App) {
    return views(options, app);
  }
}

