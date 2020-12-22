/*
 * @Description: 数据传输处理层
 * @Usage: 新增用户数据处理
 * @Author: xxx
 * @Date: 2020-12-22 16:10:51
 * @LastEditTime: 2020-12-22 16:30:57
 */
import { Component, IsNotEmpty } from "koatty";

@Component()
export class UserDTO {
    @IsNotEmpty({ message: "手机号码不能为空" })
    phoneNum: string;
}
