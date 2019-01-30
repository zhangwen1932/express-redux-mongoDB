import Express from 'express';
import Article from '../../models/article';
import { responseClient } from '../util';

const router = Express.Router();

router.post('/addArticle', (req, res) => {
  const { title, content, isPublish } = req.body;
  if (!title) {
    responseClient(res, 200, 2, '标题不可为空');
    return;
  }
  if (!content) {
    responseClient(res, 200, 2, '文章内容不可为空');
  }
  // 添加文章
  const article = new Article({
    title,
    content,
    isPublish,
  });
  article.save().then((data) => {
    responseClient(res, 200, 0, '发表文章成功', data);
  }).cancel((err) => {
    console.log(err);
    responseClient(res);
  });
});

router.get('/getArticles', (req, res) => {
  const { isPublish } = req.query;
  const searchCondition = { isPublish };
  const responseData = {
    total: 0,
    list: [],
  };
  Article.countDocuments(searchCondition)
    .then((total) => {
      responseData.total = total;
      Article.find(searchCondition, '_id title content isPublish')
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

router.get('/getArticlesDetail', (req, res) => {
  console.log('req.query', req.query);
  const { id } = req.query;
  Article.findOne({ _id: id }, '_id title content isPublish')
    .then((result) => {
      responseClient(res, 200, 0, 'success', result);
    }).cancel((err) => {
      console.log('err', err);
    });
});

module.exports = router;
