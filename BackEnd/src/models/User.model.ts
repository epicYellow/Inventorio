import { Schema, model } from "mongoose";

export interface User {
  userName: string;
  loginCode: string;
}

export const UserSchema = new Schema<User>(
  {
    userName: { type: String, required: true },
    loginCode: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel = model<User>("user", UserSchema);
