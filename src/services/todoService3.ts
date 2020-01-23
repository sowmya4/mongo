import { TodoModelDto } from "../dto/todoModelDto";
import { todoModel } from "../models/todoModel";
import { ResponseModel } from "../dto/responseModel";



export class TodoService3 {
    public static async AddTodo(data: TodoModelDto) :Promise<ResponseModel<TodoModelDto>>{
        try {
            let newTodo = new todoModel(data);
            console.log(newTodo);
            await newTodo.save();

            return ResponseModel.getValidResponse<TodoModelDto>(new TodoModelDto(data));
        }
        catch (err) {
            console.log(err);
            return ResponseModel.getInvalidResponse(err);
        }
    }

    // public static async get(id:string) :Promise<ResponseModel<TodoModelDto>>{
    //     try{
    //         let todo = await todoModel1.findById(id).exec();

    //         return ResponseModel.getValidResponse<TodoModelDto>(new todoModel1(todo));
    //     }
    //     catch(err){
    //         console.log(err);
    //         return ResponseModel.getInvalidResponse<TodoModelDto>(err);
    //     }
    //  }

    //  public static async getAll(){
    //      try{
    //          let todos = await todoModel1.find().exec();
    //          return ResponseModel.getValidResponse(todos);
    //      }
    //      catch(err){
    //          return ResponseModel.getInvalidResponse(err);
    //      }  
    //  }
     
     
    //  public static async update(req){
    //     try{
    //         let todo  = await todoModel1.findById(req.body.id).exec();
    //         todo.msg = req.body.msg;
    //         todo.up
    //         return ResponseModel.getValidResponse(todo);
    //     }
    //     catch(err){
    //         return ResponseModel.getInvalidResponse(err);
    //     }  
    // }


}