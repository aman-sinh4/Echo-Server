const mongoose = require("mongoose");
const { Schema } = require("mongoose");
import UUID from "uuid";
const userSchema = new Schema({
  id: {
    type: String,
    default: UUID.v4(),
  },
  name: {
    type: String,
    require: [true, "Please enter a name"],
  },
  email: {
    type: String,
    required: [true, "please enter email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 6,
    select: false,
  },
  avatar: {
    public_id: String,
    url: String,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
