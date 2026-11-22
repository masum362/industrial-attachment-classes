import mongoose from "mongoose";


const todosSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true
    }
},{
    timestamps:true
})


todosSchema.add({
    userId:String
})

const todoModel = mongoose.model("todo",todosSchema);

export default todoModel
