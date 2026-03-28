import { User } from "../models/user.models.js";
import { Project } from "../models/project.models.js";
import { ProjectMember } from "../models/projectmember.models.js";
import { ApiResponse } from "../utils/api-response.js";
import {ApiError} from "../utils/api-error.js"
import { asyncHandler } from "../utils/async-handler.js";
import mongoose from "mongoose";
import { UserRolesEnum } from "../utils/constants.js";


const getProject = asyncHandler(async(req,res)=>{
    //test
    const projects = await ProjectMember.aggregate([
        {
            $match: {
                user: new mongoose.Types.ObjectId(req.user._id)
            },
        },
        {
            $lookup:{
                from:"projects",
                localField:"projects",
                foreignField:"_id",
                as: "projects",
                pipeline:[
                    {
                        $lookup:{
                            from:"projectmembers",
                            localField:"_id",
                            foreignField:"projects",
                            as:"projectmembers"
                        }
                    },{
                        $addFields:{
                            members:{
                                $size: "$projectmembers"
                            }
                        }
                    }
                ]
            }
        },
        {
            $unwind: "$project"
        },
        {
            $project:{
                project :{
                    _id: 1,
                    name:1,
                    description:1,
                    member:1,
                    createdAt:1,
                    createdBy:1
                },
                role:1,
                _id: 0
            }
        }

    ])
    return res.status(200)
            .json(new ApiResponse(200,projects,"project fetched successfully"))

})
const  getProjectById = asyncHandler(async(req,res)=>{
    //test
})
const createProject = asyncHandler(async(req,res)=>{
    const {name,description} = req.body

   const project = await Project.create({
        name,
        description,
        createdBy: new mongoose.Types.ObjectId(req.user._id),
    })
    await ProjectMember.create({
        user: new mongoose.Types.ObjectId(req.user._id),
        project: new mongoose.Types.ObjectId(project._id),
        role:UserRolesEnum.ADMIN
    })

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                project,
                "project created successfully"
            )
        )
})
const updateProject = asyncHandler(async(req,res)=>{
     const { projectId } = req.params;
     const { name, description } = req.body;
     const project = await Project.findByIdAndUpdate(
        projectId,
        {name,description},
        {new:true}
     )

     if(!project){
        throw new ApiError(404,"project not found")
     }

     return res
        .status(200)
        .json(
            new ApiResponse(200,project,"project updated successfully")
        )
})
const deleteProject = asyncHandler(async(req,res)=>{
    const {projectId} = req.params
    const project =await Project.findByIdAndDelete(
        projectId,
    )

    if(!project){
        throw new ApiError(404,"project not found")
    }
    await ProjectMember.deleteMany({project:projectId})

    return res
        .status(200)
        .json(
            new ApiResponse(200,{},"project deleted successfully")
        )
})
const addMembersToProject = asyncHandler(async(req,res)=>{
    //test
})
const getProjectMembers = asyncHandler(async(req,res)=>{
    //test
})
const updateMemberRole = asyncHandler(async(req,res)=>{
    //test
})
const deleteMember = asyncHandler(async(req,res)=>{
    //test
})



export {getProject,getProjectById,getProjectMembers,createProject,updateProject,updateMemberRole,deleteMember,deleteProject,addMembersToProject}
