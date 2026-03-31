import { User } from "../models/user.models.js";
import { Project } from "../models/project.models.js";
import { Task } from "../models/task.models.js";
import { SubTask } from "../models/subtask.models.js";
import { ApiResponse } from "../utils/api-response.js";
import {ApiError} from "../utils/api-error.js"
import { asyncHandler } from "../utils/async-handler.js";
import mongoose from "mongoose";
import { UserRolesEnum } from "../utils/constants.js";

const getTask = asyncHandler(async(req,res)=>{
    //yo yo 
})
const createTask = asyncHandler(async(req,res)=>{
    //yo yo 
})
const getTaskById = asyncHandler(async(req,res)=>{
    //yo yo 
})
const updateTask = asyncHandler(async(req,res)=>{
    //yo yo 
})
const deleteTask = asyncHandler(async(req,res)=>{
    //yo yo 
})
const createSubTask = asyncHandler(async(req,res)=>{
    //yo yo 
})
const updateSubTask = asyncHandler(async(req,res)=>{
    //yo yo 
})
const deleteSubTask = asyncHandler(async(req,res)=>{
    //yo yo 
})


export{
    createSubTask,
    createTask,
    deleteTask,
    deleteSubTask,
    getTask,
    getTaskById,
    updateSubTask,
    updateTask
}


