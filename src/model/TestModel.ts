/*
 * @Description: 数据持久层
 * @Usage: 处理数据相关逻辑
 * @Author: xxx
 * @Date: 2020-12-22 16:00:49
 * @LastEditTime: 2020-12-22 17:10:00
 */


// model层不设限制，可以自由选择熟悉的orm框架，或者自己实现sql操作
// 下面的示例采用 thinkorm 模块编写，仅供参考，具体业务实现按实际需求

import { BaseModel, Entity, PrimaryColumn, Column, TimestampColumn, IsIn } from 'thinkorm';
import { Component, Value, Helper } from 'koatty';
import { App } from '../App';

@Component()
@Entity('Test')
export class TestModel extends BaseModel {
  app: App;

  @Value('database', 'db')
  config: any;

  @PrimaryColumn(32, false)
  id: string;

  /**
   * 手机号（登录账号）
   *
   * @type {string}
   * @memberof UserModel
   */
  @Column(30, '', true, true)
  phoneNum: string;

  /**
   * 用户email（登录账号）
   *
   * @type {string}
   * @memberof UserModel
   */
  @Column(50, '', true, true)
  email: string;

  /**
   * 登录密码
   *
   * @type {string}
   * @memberof UserModel
   */
  @Column(32, '')
  password: string;

  /**
   * 用户昵称
   *
   * @type {string}
   * @memberof UserModel
   */
  @Column(50, '')
  nickname: string;


  /**
   * 用户性别0女1男2不确定
   *
   * @type {number}
   * @memberof UserModel
   */
  @IsIn([0, 1, 2])
  @Column(11, 2, true)
  gender: number;



  /**
   * 自动密码hash
   *
   * @param {*} data
   * @returns
   * @memberof UserModel
   */
  autoPassword(data: any) {
    return Helper.md5(data.password);
  }


  /**
   * 自动处理生日转为时间戳
   *
   * @param {*} data
   * @returns
   * @memberof UserModel
   */
  autoBirthday(data: any) {
    return Helper.datetime(data.birthday);
  }

  /**
   * 新增用户
   *
   * @param {*} data
   * @returns {*}  
   * @memberof TestModel
   */
  save(data: any) {
    return this.add(data);
  }


  // 勾子函数

  /**
   * 新增前置处理钩子
   *
   * @param {*} data
   * @param {*} options
   * @returns
   * @memberof UserModel
   */
  _beforeAdd(data: any, options: any) {
    if (!Helper.isEmpty(data.birthday)) {
      data.birthday = this.autoBirthday(data);
    }
    if (!Helper.isEmpty(data.password)) {
      data.password = this.autoPassword(data);
    }

    return Promise.resolve(data);
  }


  /**
   * 更新前置处理钩子
   *
   * @param {*} data
   * @param {*} options
   * @returns
   * @memberof UserModel
   */
  _beforeUpdate(data: any, options: any) {
    if (!Helper.isEmpty(data.birthday)) {
      data.birthday = this.autoBirthday(data);
    }
    if (!Helper.isEmpty(data.password)) {
      data.password = this.autoPassword(data);
    }

    return Promise.resolve(data);
  }

  /**
   * 新增后置处理钩子
   *
   * @param {*} data
   * @param {*} [options]
   * @returns
   */
  _afterAdd(data: any, options?: any) {
    return Promise.resolve(data);
  }

  /**
   * 更新后置处理钩子
   *
   * @param {*} data
   * @param {*} [options]
   * @returns
   */
  _afterUpdate(data: any, options?: any) {
    return Promise.resolve(data);
  }

  /**
   * 删除后置处理钩子
   *
   * @param {*} options
   * @returns
   */
  _afterDelete(options: any) {
    return Promise.resolve();
  }

  /**
   * 单条查询后置处理钩子
   *
   * @param {*} result
   * @param {*} options
   * @returns
   * @memberof UserModel
   */
  _afterFind(result: any, options: any) {
    try {
      if (!Helper.isEmpty(result)) {
        if (!Helper.isEmpty(result.password)) {
          // 脱敏
          // result.password = "";
          delete result.password;
        }
      }
      return result;
    } catch (e) {
      return result;
    }
  }

  /**
   * 批量查询后置处理钩子
   *
   * @param {any[]} result
   * @param {*} options
   * @returns
   * @memberof UserModel
   */
  _afterSelect(result: any[], options: any) {
    const ps: any[] = [];
    result.forEach((item) => {
      ps.push(this._afterFind(item, options));
    });
    return Promise.all(ps);
  }
}
