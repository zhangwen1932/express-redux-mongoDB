/**
 * api请求server
 *
 * 0：成功
 * 1：数据不合法
 * 2：客户端数据错误
 * 3：后端错误
 */
import Express from 'express';

const app = new Express();

// 展示页面路由
app.use('/', require('./main'));
