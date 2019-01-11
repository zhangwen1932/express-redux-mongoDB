import Express from 'express';
import Test from '../../models/test';
import { responseClient } from '../util';

const router = Express.Router();

router.post('/test', (req, res) => {
  console.log('打印的req为:', req);
  console.log('打印的res为:', res);
  const { test } = req.body;
  Test.update({ test }).cancel((err) => {
    console.log(err);
    responseClient(res);
  });
});

module.exports = router;
