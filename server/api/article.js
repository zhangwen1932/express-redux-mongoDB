import Express from 'express';
import Article from '../../models/article';
import { responseClient } from '../util';

const router = Express.Router();

router.post('/publishArticle', (req, res) => {
  const { title, content } = req.body;
  console.log(req.body);
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
  article.save((err) => {
    if (err) {
      console.log('Error:' + err);
    } else {
      console.log(res);
      responseClient(res, 200, 0, '文章发表成功');
    }
  });
});

module.exports = router;
