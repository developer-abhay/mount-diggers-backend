import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  isVerified: boolean;
  role: "USER" | "ADMIN";
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  isVerified: { type: Boolean, default: false },
  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
