import mongoose from "mongoose";

const todoschema = new mongoose.Schema(
    {
        content:{
            type:String,
            required:true,
        },
        complete:{
            type: Boolean,
            default: false,
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    }, {timestamps:true})


export const todo = mongoose.model("todo", todoschema)