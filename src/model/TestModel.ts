/*
 * @Description: 数据持久层
 * @Usage: 处理数据相关逻辑
 * @Author: richen
 * @Date: 2020-12-22 16:00:49
 * @LastEditTime: 2020-12-22 16:05:31
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
   * 第三方绑定登录账号
   *
   * @type {string}
   * @memberof UserModel
   */
  @Column(50, '', true)
  openid: string;

  /**
   * 手机号（登录账号）
   *
   * @type {string}
   * @memberof UserModel
   */
  @Column(30, '', true, true)
  phonenum: string;

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
   * 姓名
   *
   * @type {string}
   * @memberof UserModel
   */
  @Column(50, '')
  realname: string;

  /**
   * 用户头像
   *
   * @type {string}
   * @memberof UserModel
   */
  @Column(256, '')
  icon: string;

  /**
   * 用户最后登录时间
   *
   * @type {number}
   * @memberof UserModel
   */
  @Column(11, 0)
  last_login_time: number;

  /**
   * 用户最后登录ip
   *
   * @type {string}
   * @memberof UserModel
   */
  @Column(50, '')
  last_login_ip: string;

  /**
   * 用户生日
   *
   * @type {string}
   * @memberof UserModel
   */
  @Column(11, 0)
  birthday: number;

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
   * 用户网站
   *
   * @type {string}
   * @memberof UserModel
   */
  @Column(100, '')
  website: string;

  /**
   * 用户简介
   *
   * @type {string}
   * @memberof UserModel
   */
  @Column(256, '')
  remark: string;

  /**
   * 创建时间
   *
   * @type {number}
   * @memberof UserModel
   */
  @TimestampColumn('_beforeAdd')
  create_time: number;

  /**
   * 更新时间
   *
   * @type {number}
   * @memberof UserModel
   */
  @TimestampColumn()
  update_time: number;

  /**
   * 状态
   *
   * @type {number}
   * @memberof UserModel
   */
  @Column(11, 1, true)
  status: number;

  /**
   * 到期时间
   *
   * @type {number}
   * @memberof UserModel
   */
  @Column(11, 0)
  end_time: number;

  /**
   * 角色ID
   *
   * @type {number}
   * @memberof UserModel
   */
  @Column(11, 0, true)
  roleid: number;

  /**
   * 组织ID
   *
   * @type {number}
   * @memberof UserModel
   */
  @Column(11, 0, true)
  groupid: number;


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
    console.log(options);
    const now = Helper.datetime();
    data.update_time = now;
    // 针对
    if (!Helper.isEmpty(data.create_time) && Helper.isString(data.create_time)) {
      data.create_time = Helper.datetime(data.create_time);
    } else {
      data.create_time = now;
    }
    if (!Helper.isEmpty(data.birthday)) {
      data.birthday = this.autoBirthday(data);
    }
    if (!Helper.isEmpty(data.password)) {
      data.password = this.autoPassword(data);
    }
    if (Helper.isEmpty(data.end_time)) {
      data.end_time = Helper.toNumber(Helper.datetime()) + (60 * 60 * 24 * 90);
    } else {
      data.end_time = Helper.datetime(data.end_time);
    }
    if (!Helper.isEmpty(data.gender)) {
      data.gender = Helper.toInteger(data.gender);
    }
    if (!Helper.isEmpty(data.roleid)) {
      data.roleid = Helper.toInteger(data.roleid);
    }
    if (!Helper.isEmpty(data.groupid)) {
      data.groupid = Helper.toInteger(data.groupid);
    }
    if (!Helper.isEmpty(data.status)) {
      data.status = Helper.toInteger(data.status);
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
    console.log(options);
    data.update_time = Helper.datetime();
    if (!Helper.isEmpty(data.create_time) && Helper.isString(data.create_time)) {
      data.create_time = Helper.datetime(data.create_time);
    }
    if (!Helper.isEmpty(data.birthday)) {
      data.birthday = this.autoBirthday(data);
    }
    if (!Helper.isEmpty(data.password)) {
      data.password = this.autoPassword(data);
    }
    if (data.end_time !== undefined) {
      if (Helper.isEmpty(data.end_time)) {
        data.end_time = Helper.toNumber(Helper.datetime()) + (60 * 60 * 24 * 90);
      } else {
        data.end_time = Helper.datetime(data.end_time);
      }
    }
    if (!Helper.isEmpty(data.status)) {
      data.status = Helper.toInteger(data.status);
    }
    if (!Helper.isEmpty(data.gender)) {
      data.gender = Helper.toInteger(data.gender);
    }
    if (!Helper.isEmpty(data.roleid)) {
      data.roleid = Helper.toInteger(data.roleid);
    }
    if (!Helper.isEmpty(data.groupid)) {
      data.groupid = Helper.toInteger(data.groupid);
    }
    if (!Helper.isEmpty(data.status)) {
      data.status = Helper.toInteger(data.status);
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
    console.log(options);
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
    console.log(options);
    return Promise.resolve(data);
  }

  /**
   * 删除后置处理钩子
   *
   * @param {*} options
   * @returns
   */
  _afterDelete(options: any) {
    console.log(options);
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
    console.log(options);
    try {
      if (!Helper.isEmpty(result)) {
        if (!Helper.isEmpty(result.password)) {
          // 过滤
          // result.password = "";
          delete result.password;
        }
        if (result.last_login_time && result.last_login_time > 0) {
          result.last_login_time_str = Helper.datetime(result.last_login_time, 'yyyy-mm-dd hh:mi:ss');
        } else {
          result.last_login_time_str = '';
        }
        if (result.create_time && result.create_time > 0) {
          result.create_time_str = Helper.datetime(result.create_time, 'yyyy-mm-dd hh:mi:ss');
        } else {
          result.create_time_str = '';
        }
        if (result.update_time && result.update_time > 0) {
          result.update_time_str = Helper.datetime(result.update_time, 'yyyy-mm-dd hh:mi:ss');
        } else {
          result.update_time_str = '';
        }
        if (result.end_time && result.end_time > 0) {
          result.end_time_str = Helper.datetime(result.end_time, 'yyyy-mm-dd hh:mi:ss');
        } else {
          result.end_time_str = '';
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
