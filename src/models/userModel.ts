import * as mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    mobile: {type:String, required: true,unique:true},
    createdAt: {type:Date, default: Date.now},
    tasks:[{type:mongoose.Schema.Types.ObjectId,ref:"todos"}]
})

export var userModel = mongoose.model("users",userSchema);