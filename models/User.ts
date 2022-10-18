import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  id: { type: String, required: true },
  userName: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  videos: [
    {
      url: { type: String, unique: true },
      id: String,
      thumbnail: String,
      title: String,
      comments: [String],
    },
  ],
});
const User = mongoose.model("User", userSchema);
export default User;
