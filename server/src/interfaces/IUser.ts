import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  forename: string;
  email: string;
  username: string;
  password: string;
  role: string;
  avatar: string;
  auth_type: string;
  birth_date: Date;
  location?: {
    country?: string;
    state?: string;
  };
  fullname?: string; // virtual
}
