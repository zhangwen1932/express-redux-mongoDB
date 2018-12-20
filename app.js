var express = require('express');
var http = require('http');
const cors = require('cors');
var app = express();
app.use(cors());
//all enviroments
app.set('port', 3000);


app.get('/getUserInfo', function(req, res, next){
  console.log('get用户请求数据为：');
  console.log(req.query);

  res.json({
    meta:{
      code:200
    },
    data:{
      message:'曹闪闪'
    }
  })
})


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});