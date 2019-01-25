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

module.exports = router;
