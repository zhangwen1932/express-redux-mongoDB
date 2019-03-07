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
            responseClient(res, 200, 0, 'success');
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
      responseClient(res, 200, 0, 'success');
    }).catch((err) => {
      console.log('err', err);
    });
});

router.get('/getCommentList', (req, res) => {
  // const { articleId } = req.query;
  // console.log('articleId', articleId);
  const searchCondition = req.query;
  Comment.find(searchCondition, '_id content time userId')
    .then((result) => {
      console.log(result);
      if (result && result.length > 0) {
        const userIds = result.map(item => item.userId);
        console.log(userIds);
        User.find({ _id: userIds }).then((rawUsers) => {
          const users = {};
          rawUsers.forEach((r) => {
            users[r._id.toString()] = r;
          });
          console.log(users);
          const data = result.map((r) => {
            console.log(r.userId);
            return {
              id: r._id,
              nickname: users[r.userId] && users[r.userId].nickname,
              content: r.content,
              time: r.time,
            };
          });
          responseClient(res, 200, 0, 'success', data);
        });
      } else {
        responseClient(res, 200, 0, 'success', '暂无评论');
      }
    }).cancel((err) => {
      console.log('err', err);
    });
});
module.exports = router;
