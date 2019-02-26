/**
 *  评论的解构
 */
import mongoose from 'mongoose';

module.exports = new mongoose.Schema({
  nickname: String, // 评论者
  email: String, // 评论者邮箱
  content: String, // 评论内容
  articleId: String, // 文章ID
  time: String, // 评论时间
});
