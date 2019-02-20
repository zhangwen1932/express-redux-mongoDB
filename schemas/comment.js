/**
 *  评论的解构
 */
import mongoose from 'mongoose';

module.exports = new mongoose.Schema({
  author: String, // 文章标题
  content: String, // 文章内容
  postId: String, // 浏览次数
});
