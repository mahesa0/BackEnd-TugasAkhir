import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "User",
    },
  },
  {
    timestamps: true,
  }
);

// const User = mongoose.model("User", UserSchema, "users"); //prod
const User = mongoose.model("User", UserSchema); //local
export default User;
