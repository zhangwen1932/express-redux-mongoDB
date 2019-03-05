import Express from 'express';
import Comment from '../../models/comment';
import User from '../../models/user';
import { responseClient } from '../util';

const router = Express.Router();

router.post('/addComment', (req, res) => {
  const {
    email, comments, id, nickname, thistime,
  } = req.body;
  User.findOne({ email })
    .then((result) => {
      if (result) {
        const comment = new Comment({
          articleId: id,
          content: comments,
          time: thistime,
          userId: result._id,
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
        return;
      }
      const user = new User({
        nickname,
        email,
      });
      user.save()
        .then((saveUser) => {
          const comment = new Comment({
            articleId: id,
            content: comments,
            time: thistime,
            userId: saveUser._id,
          });
          comment.save()
            .then(() => {
              const data = {};
              data.content = comment.content;
              data.time = comment.time;
              data.author = nickname;
            }).catch((err) => {
              console.log(err);
            });
        }).catch((err) => {
          console.log(err);
        });
      responseClient(res, 200, 0, 'success', '存储了用户和评论');
    }).catch((err) => {
      console.log('err', err);
    });
});

router.get('/getCommentList', (req, res) => {
  const { articleId } = req.query;
  console.log('articleId', articleId);
  const searchCondition = req.query;
  Comment.find(searchCondition, '_id content time')
    .then((result) => {
      responseClient(res, 200, 0, 'success', result);
    }).cancel((err) => {
      console.log('err', err);
    });
});
module.exports = router;
