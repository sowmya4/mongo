import * as express from "express"
import { ResponseModel } from "../dto/responseModel";
import { TodoModelDto } from "../dto/todoModelDto";
import { TodoService3 } from "../services/todoService3";

export class TodoController {
    public static async create(req: express.Request, res: express.Response) {
        let response: ResponseModel<TodoModelDto> = await TodoService3.AddTodo(req);
        console.log(response);
        return res.send(response);
    }

    // public static async get(req: express.Request, res: express.Response) {
    //     let response = await TodoService3.get(req.params._id);
    //     return res.send(response);

    // }

    // public static async getAll(req: express.Request, res: express.Response){
    //     let response = await TodoService3.getAll();
    //     return res.send(response);
    // }

    // public static async update(req: express.Request, res: express.Response){
    //     let response = await TodoService3.update(req);
    //     return res.send(response);
    // }
}