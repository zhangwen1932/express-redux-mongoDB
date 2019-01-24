/* eslint-disable no-shadow */
/* eslint-disable func-names */
/**
 * api请求server
 *
 * 0：成功
 * 1：数据不合法
 * 2：客户端数据错误
 * 3：后端错误
 */
import Express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bodyParser from 'body-parser';
import config from '../../config/config';

const port = config.apiPort;

const app = new Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('express_react_cookie'));
app.use(session({
  secret: 'express_react_cookie', // 对session_id相关的cookie进行签名
  resave: true,
  saveUninitialized: true, // 是否保存初始化的会话
  cookie: { maxAge: 60 * 1000 * 30 }, // 过期时间 单位毫秒
}));

// 测试接口是否有问题
app.use('/', require('./user'));
// 管理页面路由
app.use('/admin', require('./admin'));

mongoose.Promise = require('bluebird');

mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/test`, (err) => {
  if (err) {
    console.log(err, '数据库连接失败');
    return;
  }
  console.log('数据库连接成功.');

  app.listen(port, (err) => {
    if (err) {
      console.error('err:', err);
    } else {
      console.info(`===> api server is running at ${config.apiHost}:${config.apiPort}`);
    }
  });
});
