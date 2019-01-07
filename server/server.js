import Express from 'express';
import config from '../config/config';

const app = new Express();
const { port } = config;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`===>open http://${config.host}:${config.port} in a browser to view the app`);
  }
});
