import mongoose from 'mongoose';
import testSchema from '../schemas/test';

module.exports = mongoose.model('Test', testSchema);
