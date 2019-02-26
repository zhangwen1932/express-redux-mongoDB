import Express from 'express';
import Comment from '../../models/comment';
import User from '../../models/user';
import { responseClient } from '../util';

const router = Express.Router();

router.post('/addComment', (req, res) => {
  const {
    email, comments, id, nickname, thistime,
  } = req.body;
  const comment = new Comment({
    articleId: id,
    content: comments,
    time: thistime,
  });
  const user = new User({
    nickname,
    email,
  });
  user.save()
    .then(() => false).catch((err) => {
      console.log(err);
    });
  comment.save()
    .then(() => {
      const data = {};
      data.content = comment.content;
      data.time = comment.time;
      data.author = nickname;
      responseClient(res, 200, 0, 'success', data);
    }).catch((err) => {
      console.log(err);
    });
});

module.exports = router;
