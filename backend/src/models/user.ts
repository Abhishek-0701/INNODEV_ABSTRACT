import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  Hostel: {
    type: String,
  },
  Room_No: {
    type: String,
  },
  Mobile_No: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
