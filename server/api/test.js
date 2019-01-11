import Express from 'express';
import Test from '../../models/test';
import { responseClient } from '../util';

const router = Express.Router();

router.post('/test', (req, res) => {
  const { testData } = req.body;
  console.log('输入的req是', req.body);
  Test.findOne({
    testData,
  }).then((result) => {
    if (!result) {
      const test = new Test({
        testData,
      });
      test.save()
        .then((data) => {
          responseClient(res, 200, 0, '添加成功', data);
        }).catch((err) => {
          throw err;
        });
    } else {
      responseClient(res, 200, 1, '该标签已存在');
    }
  }).catch((err) => {
    responseClient(res);
    console.log(err);
  });
});

module.exports = router;
