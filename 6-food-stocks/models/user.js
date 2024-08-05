import mongoose, { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['GUEST', 'ADMIN'],
    required: true,
    default: 'GUEST',
  },
});

userSchema.plugin(passportLocalMongoose);

export const User = mongoose.model('User', userSchema);
