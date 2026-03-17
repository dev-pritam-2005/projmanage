import mongoose, { mongo, Schema } from "mongoose";
import {AvailableUserRole,UserRolesEnum} from "../utils/constants.js"


const projectMemberSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required: true
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required:true
    },
    role: {
      type: String,
      enum: AvailableUserRole,
      default: UserRolesEnum.MEMBER,
    },
},{timeseries:true})

export const ProjectMember = mongoose.model(
  "ProjectMember",
  projectMemberSchema
);