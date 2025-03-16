/*
 * @Description: 路由配置
 * @Usage: 项目路由属性配置
 * @Author: xxx
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2023-02-19 01:32:59
 */

export default {
  // Used koa-router

  // prefix: string;
  // /**
  //  * Methods which should be supported by the router.
  //  */
  // methods ?: string[];
  // routerPath ?: string;
  // /**
  //  * Whether or not routing should be case-sensitive.
  //  */
  // sensitive ?: boolean;
  // /**
  //  * Whether or not routes should matched strictly.
  //  *
  //  * If strict matching is enabled, the trailing slash is taken into
  //  * account when matching routes.
  //  */
  // strict ?: boolean;

  /**
   *  Other extended configuration
   */
  ext: {
    // protoFile: process.env.APP_PATH + "/resource/proto/Hello.proto", // gRPC proto file
    // schemaFile: process.env.APP_PATH + "/resource/graphql/User.graphql", // graphQL schema file
  }
};