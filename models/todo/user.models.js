import mongoose, { Schema }  from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
    },
        email:{
            type:string, 
            required:true,
            unique:true,
            lowercase:true
    },
    subTodos:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Subtodo"

        }
    ]

    

},{timestamps:true},)


export const User  = mongoose.model("User", userSchema)