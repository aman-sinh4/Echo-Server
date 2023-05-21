const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PostsSchema = new Schema({
  caption: String,
  image: {
    public_id: String,
    url: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  likes: [
    {
        user:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }
  ],
  comments: [
    {
        user:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        comment:{
            type: String,
            required: true
        }
    }
  ]
});

module.exports = mongoose.model("Posts", PostsSchema);
