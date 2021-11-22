/*
 * @Description: 逻辑层
 * @Usage: 处理具体业务逻辑
 * @Author: xxx
 * @Date: 2020-12-22 15:59:51
 * @LastEditTime: 2021-11-22 17:25:07
 */

import { Service, BaseService, Autowired } from 'koatty';
import { App } from '../App';
import { UserDto } from '../dto/UserDto';
import { Scheduled, SchedulerLock } from "koatty_schedule";
import { CacheAble, CacheEvict, GetCacheStore } from "koatty_cacheable";
// import { TestModel } from '../model/TestModel';

@Service()
export class TestService extends BaseService {
  app: App;
  // @Autowired()
  // protected testModel: TestModel;

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
   * 获取用户信息
   *
   * @param {number} id
   * @memberof TestService
   */
  // 自动缓存,默认存储在内存,支持存储redis
  @CacheAble("getUser")
  getUser(id: number) {
    return Promise.resolve({ "id": id, "username": "test" });
  }

  /**
   * 新增用户
   *
   * @param {UserDto} data
   * @returns {*}  {Promise<any>}
   * @memberof TestService
   */
  addUser(data: UserDto): Promise<any> {
    // return this.testModel.save(data);
    return Promise.resolve();
  }

  /**
   * cron job
   *
   * @memberof TestService
   */
  @Scheduled("0 * * * * *")
  //计划任务加锁，默认内存锁，配合redis可以实现分布式锁
  // @SchedulerLock("testCron") 
  testCron() {
    console.log('cron job');
  }
}
