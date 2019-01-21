import crypto from 'crypto';

export const md5 = (pwd) => {
  const md5Compile = crypto.createHash('md5');
  return md5Compile.update(pwd).digest('hex');
};

export const responseClient = (res, httpCode = 500, code = 3, message = '服务端异常', data = {}) => {
  const responseData = {};
  responseData.code = code;
  responseData.message = message;
  responseData.data = data;
  res.status(httpCode).json(responseData);
};
