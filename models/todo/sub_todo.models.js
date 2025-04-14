import mongoose, { mongo } from "mongoose";

const subtodoSchema = new mongoose.Schema(
    {
        content:{
            type : String,
            required: true
        },
        complete:{
            type :Boolean,
            defalut :fals
        },
        createdBy:{
            type : mongoose.Schema.Type.ObjectId,
            ref: "User",
        }

}, {timestamps:true})


export const subtodo = mongoose.model("Subtodo", subtodoSchema)