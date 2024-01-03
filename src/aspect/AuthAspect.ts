/*
 * @Description: AOP切面类
 * @Usage: 
 * @Author: xxx
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2024-01-04 06:14:37
 */

import { Aspect, Exception, IAspect, Logger } from "koatty";
import { App } from '../App';

@Aspect()
export class AuthAspect implements IAspect {
  app: App;

  async run(token: string) {
    Logger.Debug(token);
    const isLogin = await this.checkLogin(token);
    if (!isLogin) {
      throw new Exception("no login", 1, 200);
    }
  }

  checkLogin(token: string): boolean {
    return token.toLocaleLowerCase() === 'koatty';
  }
}
