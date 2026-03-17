import mongoose, { mongo, Schema } from "mongoose";


const subTaskSchema =new Schema({
    tile:{
        type:String,
        required:true,
        trim:true
    },
    task:{
        type:Schema.Types.ObjectId,
        ref:task,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    }


},{timestamps:true})

export const SubTask = mongoose.model("SubTask", subTaskSchema);