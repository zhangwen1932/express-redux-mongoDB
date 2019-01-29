/**
 *  文章的解构
 */
import mongoose from 'mongoose';

module.exports = new mongoose.Schema({
  title: String,
  content: String,
  isPublish: Boolean,
});
