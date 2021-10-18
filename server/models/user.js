import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: String,
  password: String,
  mobile: Number,
  secreateKey: String,
});

export default mongoose.model("User", UserSchema);
