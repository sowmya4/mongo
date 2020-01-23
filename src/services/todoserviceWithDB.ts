import { Request, Response } from "express"
import { todoModel } from "../models/todoModel";


export class TodoService2 {
    public static async AddTodo(req: Request, res: Response) {
        try {
            let newTodo = new todoModel(req.body);
            await newTodo.save();
            res.send(newTodo);
        }
        catch (err) {
            console.log(err);
            res.send(err);
        }
    }

    // public static async getAll(req: Request, res: Response) {
    //     try {
    //         let todos = await todoModel.find().exec();
    //         res.send(todos);
    //     }
    //     catch (err) {
    //         console.log(err);
    //         return err;
    //     }
    // }

    //Try getAll using promise
          public static getAll(req: Request, res: Response){
              let todos = todoModel.find().exec();
              todos.then((result,state) =>{
                  res.send(result);
              },
              (error,state)=>{
                res.send("error encounterd",state);
              })
        }

    public static async get(req: Request, res: Response) {
        try {
            let todo = await todoModel.findById(req.params.id).exec();
            res.send(todo);
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async remove(req: Request, res: Response) {
        try {
            let todo = await todoModel.deleteOne({ id: req.params.id }).exec();
            res.send(todo);
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
}