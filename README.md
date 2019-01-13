# express-redux-mongoDB

## 启动
```shell
npm run start
```

项目目录
```
.
├── README.md                   
├── app                     // 前端源码文件夹
│    ├──index.js            // 入口文件 
│    ├──container           // 组件容器
│    ├──sagas               // saga文件夹，异步action处理
│    └──reducers   
├── config                  // 总应用配置文件
├── models                  
├── schemas                 // mongoose schema文件夹
├── server                  // server端源码文件夹
│    ├── api                // server端 api接口文件夹
│    ├── server.js          // server文件
│    └── index.js           // server启动文件
├── static                  // 静态资源托管文件夹
└── webpack.dev.js          // webpack配置文件
```
