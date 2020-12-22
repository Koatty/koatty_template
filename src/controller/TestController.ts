/*
 * @Description: 业务层
 * @Description: 接收处理路由参数
 * @Author: richen
 * @Date: 2020-12-22 15:31:17
 * @LastEditTime: 2020-12-22 15:53:53
 */

import { Controller, BaseController, Autowired, GetMapping } from 'koatty';
import { App } from '../App';
import { TestService } from '../service/TestService';

@Controller('/')
export class TestController extends BaseController {
  app: App;

  @Autowired()
  protected TestService: TestService;

  async __before(): Promise<any> {
    // 管理后台登录检查
    // await this.checkLogin();
  }

  /**
   * index 接口
   *
   * @returns
   * @memberof TestController
   */
  @GetMapping('/')
  index(): Promise<any> {
    this.ctx.status = 200;
    return this.ok('Hi TKoatty');
  }

  /**
   * hello 接口
   *
   * @returns
   * @memberof TestController
   */
  @GetMapping('/hello')
  hello(): Promise<any> {
    const userName = this.TestService.getUserName();
    this.ctx.status = 200;
    return this.ok('succ', { userName });
  }

  /**
   * hello 接口
   *
   * @returns
   * @memberof TestController
   */
  @GetMapping('/html')
  html(): Promise<any> {
    this.ctx.status = 200;
    return this.ctx.render('./index.html');
  }


  /**
   * 检查登录
   *
   * @returns
   * @memberof TestController
   */
  async checkLogin(): Promise<any> {
    const token = this.ctx.get('x-access-token');
    const isLogin = await this.TestService.checkLogin(token);
    if (isLogin) {
      this.ctx.userId = `${Date.now()}_${String(Math.random()).substring(2)}`;
    } else {
      return this.fail('no login', { needLogin: 1 });
    }
  }
}
