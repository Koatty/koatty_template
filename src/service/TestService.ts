/*
 * @Description: 逻辑层
 * @Usage: 处理具体业务逻辑
 * @Author: xxx
 * @Date: 2020-12-22 15:59:51
 * @LastEditTime: 2020-12-24 10:11:26
 */

import { Service, BaseService, Autowired } from 'koatty';
import { App } from '../App';
import { UserDTO } from '../dto/UserDTO';
import { TestModel } from '../model/TestModel';

@Service()
export class TestService extends BaseService {
  app: App;
  @Autowired()
  protected testModel: TestModel;

  /**
   * 登录检测
   *
   * @param {string} token
   * @memberof TestService
   */
  checkLogin(token: string): boolean {
    return token.toLocaleLowerCase() === 'koatty';
  }

  /**
   * 新增用户
   *
   * @param {UserDTO} data
   * @returns {*}  {Promise<any>}
   * @memberof TestService
   */
  addUser(data: UserDTO): Promise<any> {
    return this.testModel.save(data);
  }
}
