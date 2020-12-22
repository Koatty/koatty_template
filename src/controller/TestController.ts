/*
 * @Description: 业务层
 * @Description: 接收处理路由参数
 * @Author: richen
 * @Date: 2020-12-22 15:31:17
 * @LastEditTime: 2020-12-22 16:49:33
 */

import { Controller, BaseController, Autowired, GetMapping, Post, PostMapping, Validated } from 'koatty';
import { App } from '../App';
import { UserDTO } from '../dto/UserDTO';
import { TestService } from '../service/TestService';

@Controller('/')
export class TestController extends BaseController {
  app: App;

  @Autowired()
  protected TestService: TestService;

  /**
   * 前置登录检查
   * AOP前置切面方法，等同于@BeforeEach()
   * @returns {*}  {Promise<any>}
   * @memberof TestController
   */
  async __before(): Promise<any> {
    // 登录检查
    const token = this.header("x-access-token");
    const isLogin = await this.TestService.checkLogin(token);
    if (isLogin) {
      this.ctx.userId = `${Date.now()}_${String(Math.random()).substring(2)}`;
    } else {
      return this.fail('no login', { needLogin: 1 });
    }
  }

  /**
   * @api {get} / index接口
   * @apiGroup Test
   * 
   * @apiHeader {String} x-access-token JWT token
   * 
   * 
   * @apiSuccessExample {json} Success
   * {"code":1,"message":"","data":{}}
   * 
   * @apiErrorExample {json} Error
   * {"code":0,"message":"错误信息","data":null}
   */
  @GetMapping('/')
  index(): Promise<any> {
    this.ctx.status = 200;
    return this.ok('Hi Koatty');
  }

  /**
   * @api {post} /add add接口
   * @apiGroup Test
   * 
   * @apiHeader {String} x-access-token JWT token
   * 
   * @apiParamClass (src/dto/UserDTO.ts) {RoleDTO}
   * 
   * @apiSuccessExample {json} Success
   * {"code":1,"message":"","data":{}}
   * 
   * @apiErrorExample {json} Error
   * {"code":0,"message":"错误信息","data":null}
   */
  @PostMapping('/add')
  @Validated()
  add(@Post() data: UserDTO): Promise<any> {
    const userId = this.TestService.addUser(data);
    return this.ok('success', { userId });
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
}
