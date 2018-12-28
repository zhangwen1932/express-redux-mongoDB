const express = require('express');
const http = require('http');
// const cors = require('cors');// 解决跨域问题

const app = express();
// app.use(cors());
// all enviroments
app.set('port', 2300);


app.get('/getUserInfo', (req, res) => {
  console.log('get用户请求数据为：');
  console.log(req.query);

  res.json({
    meta: {
      code: 200,
    },
    data: {
      message: '曹闪闪',
    },
  });
});

http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
