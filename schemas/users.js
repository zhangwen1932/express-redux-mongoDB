/**
 * 用户的表结构
 */
import mongoose from 'mongoose';

module.exports = new mongoose.Schema({
  username: String,
  avatar: String,
  email: String,
  profile: String,
  password: String,
  occupation: String,
  company: String,
  id: String,
});
