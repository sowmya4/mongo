import { Request, Response } from "express"
import { Todo } from "../models/todo";
import { User } from "../models/user";
import { UserService } from "./userService";
export class TodoService {

    //properties
    // @input-{"msg":string} , params: mobile
    // create a new todo task
    public static createTask(req: Request, res: Response): void {
        //check for user
        let user: User = UserService.findByMobile(req.params.mobile);
        if (!user) {
            res.statusCode = 403;
            res.send(`no user exist with given num ${req.params.mobile}`);
            return;
        }

        // create new task
        let newTask: Todo = new Todo(req.body.msg);

        // Add new task to user tasklist
        user.tasks.push(newTask);

        // send response
        res.send(`task created`);
    }

    // Read all todos
    public static getAll(req: Request, res: Response): void {
        // check for the user
        let user = UserService.findByMobile(req.params.mobile);
        if (!user) {
            res.statusCode = 403;
            res.send(`no user with given mobile number ${req.params.mobile} `);
            return;
        }

        res.send(user.tasks);
    }

    // which user requesting 
    // Read one todo as per id
    // params mobile:string/id:number
    public static get(req: Request, res: Response): void {
        let user: User = UserService.findByMobile(req.params.mobile);
        let id = +req.params.id;
        if (!user) {
            res.statusCode = 403;
            res.send(`no user with given mobile number ${req.params.mobile} has created the task with id ${id}`);
            return;
        }

        let indexOfTask: number = TodoService.findIndexOfTask(id, user);
        if (indexOfTask == -1) {
            res.statusCode = 403;
            res.send(`no task with id ${id} for user with mobile number ${req.params.mobile}`);
            return;
        }

        res.send(user.tasks[indexOfTask]);

    }

    // update a todo task message of a user
    // @Input---input params mobile:string/id:number,
    //@Input body  {""id":number,msg":string} 
    public static update(req: Request, res: Response):void{
        let user: User = UserService.findByMobile(req.params.mobile);
        let id = +req.body.id;
        if (!user) {
            res.statusCode = 403;
            res.send(`no user with given mobile number ${req.params.mobile} has the task with id ${id}`);
            return;
        }

        let indexOfTask: number = TodoService.findIndexOfTask(id, user);
        if (indexOfTask == -1) {
            res.statusCode = 403;
            res.send(`no task with id ${id} for user with mobile number ${req.params.mobile}`);
            return;
        }

        user.tasks[indexOfTask].msg = req.body.msg;
        res.send(`updated message for task ${id}`)

    }

    // mark a task as completed
    // @Input---params mobile:string/id:number
    public static markForComplete(req: Request, res: Response):void {
        let user: User = UserService.findByMobile(req.params.mobile);
        let id = +req.params.id;
        if (!user) {
            res.statusCode = 403;
            res.send(`no user with given mobile number ${req.params.mobile} has the task with id ${id}`);
            return;
        }

        let indexOfTask: number = TodoService.findIndexOfTask(id, user);
        if (indexOfTask == -1) {
            res.statusCode = 403;
            res.send(`no task with id ${id} for user with mobile number ${req.params.mobile}`);
            return;
        }

        user.tasks[indexOfTask].isDone = true;
        res.send(`marked task ${id} as completed`);
    }

    // remove a task from list based on id, user
    // @Input---params mobile:string/id:number
    public static remove(req: Request, res: Response):void {
        // Get user 
        let user: User = UserService.findByMobile(req.params.mobile);
        let id:number = +req.params.id;
        if (!user) {
            res.statusCode = 403;
            res.send(`no user with given mobile number ${req.params.mobile} has the task with id ${id}`);
            return;
        }

        let indexOfTask: number = TodoService.findIndexOfTask(id, user);
        if (indexOfTask == -1) {
            res.statusCode = 403;
            res.send(`no task with id ${id} for user with mobile number ${req.params.mobile}`);
            return;
        }

        user.tasks.splice(indexOfTask, 1);
        res.send(`removed task from list`);

    }

    // find a task based on id
    private static findIndexOfTask(id: number, user: User):number {
        for (let i = 0; i < user.tasks.length; i++) {
            if (id == user.tasks[i].id) {
                console.log(`${i} is returned`)
                return i;
            }
        }

        return -1;
    }
}