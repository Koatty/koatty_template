/*
 * @Description: jwt中间件
 * @Usage: 
 * @Author: xxx
 * @Date: 2020-12-22 15:54:39
 * @LastEditTime: 2020-12-22 17:09:41
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
