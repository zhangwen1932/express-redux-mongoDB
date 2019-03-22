import Express from 'express';
import Article from '../../models/article';
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
            responseClient(res, 200, 0, 'success');
          }).catch((err) => {
            console.log(err);
          });
      } else {
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
      }
      Article.findOne({ _id: id })
        .then((data) => {
          let newCounts = data.commentsCount;
          newCounts += 1;
          Article.updateOne({ _id: id }, { commentsCount: newCounts })
            .then(() => {
              responseClient(res, 200, 0, '更新成功');
            });
        });
    }).catch((err) => {
      console.log('err', err);
    });
});

router.get('/getCommentsList', (req, res) => {
  const searchCondition = req.query;
  Comment.find(searchCondition, '_id content time userId')
    .then((result) => {
      if (result && result.length > 0) {
        const userIds = result.map(item => item.userId);
        User.find({ _id: userIds }).then((rawUsers) => {
          const users = {};
          rawUsers.forEach((r) => {
            console.log('r._id', r._id);
            users[r._id] = r;
          });
          const data = result.map(r => ({
            id: r._id,
            nickname: users[r.userId] && users[r.userId].nickname,
            content: r.content,
            time: r.time,
          }));
          responseClient(res, 200, 0, 'success', data);
        });
      } else {
        responseClient(res, 200, 1, 'success');
      }
    }).cancel((err) => {
      console.log('err', err);
    });
});

module.exports = router;
