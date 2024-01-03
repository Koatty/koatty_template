/*
 * @Description: 逻辑层接口
 * @Usage: 
 * @Author: richen
 * @Date: 2024-01-04 06:07:57
 * @LastEditTime: 2024-01-04 06:10:05
 * @License: BSD (3-Clause)
 * @Copyright (c): <richenlin(at)gmail.com>
 */

import { IService, Koatty } from "koatty";
import { UserDto } from "../dto/UserDto";

export interface ITestService extends IService {
  app: Koatty;
  /**
   * checkLogin
   * @param token 
   */
  checkLogin(token: string): boolean;
  /**
   * getUser
   * @param id 
   */
  getUser(id: number): any;
  /**
   * addUser
   * @param data 
   */
  addUser(data: UserDto): Promise<any>;
  /**
   * cron job
   */
  testCron(): void;
}