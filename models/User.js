const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: 'You need to provide a user name!',
    trim: true
  },
  email: {
    type: String,
    required: 'You need to provide an email address!',
    unique: true,
    match: [/.+@.+\..+/]
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// get total count of friends
UserSchema.virtual('friendCount').get(function() {
  return this.friends.reduce((total, friend) => total + friend.length + 1, 0);
});

// create the User model using UserSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;