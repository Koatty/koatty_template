/*
 * @Description: 模板解析中间件
 * @Usage: 支持ejs等模板标签解析
 * @Author: xxx
 * @Date: 2020-12-22 15:54:39
 * @LastEditTime: 2024-01-04 07:50:17
 */

import { Middleware } from 'koatty';
import { Views } from 'koatty_views';
import { App } from '../App';

@Middleware()
export class ViewMiddleware {
  run(options: any, app: App): any {
    return Views(options, app);
  }
}

