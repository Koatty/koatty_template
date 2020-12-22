/*
 * @Description: view中间件
 * @Usage: 
 * @Author: xxx
 * @Date: 2020-12-22 15:54:39
 * @LastEditTime: 2020-12-22 17:09:51
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

