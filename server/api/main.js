import Express from 'express';
import User from '../../models/user';
import Article from '../../models/article';
import { responseClient } from '../util';


const router = Express.Router();

// router.use('/comment', require('./comment'));

router.use('/comment', require('./comment'));

router.get('/getIntro', (req, res) => {
  const id = '1';
  // 查找用户
  User.findOne({
    id,
  }).then((userInfo) => {
    if (userInfo) {
      // 查找到该用户
      const data = {};
      data.username = userInfo.nickname;
      data.profile = userInfo.profile;
      data.avatar = userInfo.avatar;
      data.occupation = userInfo.occupation;
      data.company = userInfo.company;
      responseClient(res, 200, 0, 'success', data);
    }
  }).catch((err) => {
    responseClient(res);
    console.log('err', err);
  });
});

router.get('/getAuthorArticles', (req, res) => {
  const { isPublish } = req.query;
  const searchCondition = { isPublish };
  const responseData = {
    total: 0,
    list: [],
  };
  Article.countDocuments(searchCondition)
    .then((total) => {
      responseData.total = total;
      Article.find(searchCondition, '_id title content isPublish time likeCount')
        .then((result) => {
          responseData.list = result;
          responseClient(res, 200, 0, 'success', responseData);
        }).cancel((err) => {
          console.log('err', err);
        });
    }).cancel((err) => {
      console.log('err', err);
    });
});

router.post('/addLike', (req, res) => {
  const { id, likeCount } = req.body;
  Article.update({ _id: id }, { likeCount })
    .then(() => {
      const data = {};
      data.likeCount = likeCount;
      responseClient(res, 200, 0, 'success', data);
    }).cancel((err) => {
      console.log('err', err);
    });
});

module.exports = router;
