import crypto from 'crypto';

module.exports = {
  MD5_SUFFIX: '',
  md5: (pwd) => {
    const md5 = crypto.createHash('md5');
    return md5.update(pwd).digest('hex');
  },
  responseClient(res, httpCode = 500, code = 3, message = '服务端异常', data = {}) {
    const responseData = {};
    responseData.code = code;
    responseData.message = message;
    responseData.data = data;
    res.status(httpCode).json(responseData);
  },
};
