// import * as mongoose from 'mongoose';

//  var todoSchema = new mongoose.Schema({
//     msg: {type:String, required: true},
//     isDone: {type:Boolean, default: false},
//     createdAt: {type:Date, default:Date.now}
// }) 
// export var todoModel = mongoose.model("todos",todoSchema);//collection name and schema

import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
    //defaults
    createdAt: {type:Date, default:Date.now},
    updatedAt: Date,
    task: {type: String, required: true},
    priority:{
        type: String,
        enum: [
            'P0',
            'P1',
            'P2',
            'P3',
            'P4',
            'P5'
        ],
        default: 'P5'
    },
    isComplete: {type:Boolean, default:false}
})

export var todoModel = mongoose.model("todos",TodoSchema);
