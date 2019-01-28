import Express from 'express';
import Article from '../../models/article';
import { responseClient } from '../util';

const router = Express.Router();

router.post('/addArticle', (req, res) => {
  const { title, content } = req.body;
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
  });
  article.save().then((data) => {
    responseClient(res, 200, 0, '发表文章成功', data);
  }).cancel((err) => {
    console.log(err);
    responseClient(res);
  });
});

router.get('/getArticles', (req, res) => {
  console.log('hello world');
  const searchCondition = { req };
  const responseData = {
    total: 0,
    list: [],
  };
  // 查找数据
  Article.count(searchCondition)
    .then((count) => {
      responseData.total = count;
      console.log('responseData', responseData);
    });
});

module.exports = router;
