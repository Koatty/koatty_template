/*
 * @Description: 逻辑层
 * @Usage: 处理具体业务逻辑
 * @Author: richen
 * @Date: 2020-12-22 15:59:51
 * @LastEditTime: 2020-12-22 16:00:07
 */

import { Service, BaseService } from 'koatty';
import { App } from '../App';

@Service()
export class TestService extends BaseService {
  app: App;

  /**
   * 获取用户昵称
   *
   * @returns {string}  返回用户昵称
   * @memberof TestService
   */
  getUserName(): string {
    return 'TKoatty';
  }

  /**
   * 登录检测
   *
   * @param {string} token
   * @memberof TestService
   */
  checkLogin(token: string): boolean {
    return token.toLocaleLowerCase() === 'tkoatty';
  }
}
