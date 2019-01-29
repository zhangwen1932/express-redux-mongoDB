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
  console.log('title', isPublish);
  responseClient(res, 200, 0, '服务器响应', isPublish);
  const searchCondition = { isPublish };
  console.log('searchCondition', searchCondition);
  Article.countDocuments(searchCondition, (err, total) => {
    if (err) {
      console.log('err', err);
    }
    console.log('total', total);
  });
});

module.exports = router;
