import mongoose, { mongo, Schema } from "mongoose";

const projectNoteSchema = new mongoose.Schema(
  {
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required:true,
    },
    
    content: {
      type: String,
      required: true,
    },


    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
  },
  { timestamps: true }
);

export const Note = mongoose.model("Note", projectNoteSchema);