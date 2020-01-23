import { Request, Response } from "express"
import { userModel } from "../models/userModel"
import { todoModel } from "../models/todoModel";

export class UserService2 {

    // create a new user, req body contains name and mobile
    public static async createNewUser(req: Request, res: Response) {
        try {
            let newUser = new userModel(req.body);
            await newUser.save();
            res.send(newUser);
        }
        catch (err) {
            res.send(err);
        }
    }

    // get all user details
    public static async getAllUsers(req: Request, res: Response) {
        try {
            let allUsers = await userModel.find().exec();
            res.send(allUsers);
        }
        catch (err) {
            res.send(err);
        }
    }

    // update a user mobile number
    public static async updateUserMobile(req: Request, res: Response) {
        try {
            // find user with given id
            let user = await userModel.findById(req.body._id).exec();
            if (!user) {
                res.send(`Bad request..no user with mobile number ${req.body.mobile}`);
                return;
            }

            user.mobile = req.body.mobile;
            await user.save();
            res.send(user);
        }
        catch (err) {
            res.send(err);
        }
    }

    // addTask for User; send mobile and message of task in req body
    public static async addTask(req: Request, res: Response) {
        try {
            // find user who has created task by mobile num
            let user = await userModel.findOne({ mobile: req.body.mobile }).exec();
            console.log("user with mobile num", user);
            if (!user) {
                res.send(`Bad request..no user with mobile number ${req.body.mobile}`);
                return;
            }

            // create task in todo model
            // let newTask = new todoModel(new Todo2(req.body.message));
            let newTask = new todoModel({ msg: req.body.msg });
            console.log("new task", newTask);
            // writes newTask in todoModel
            await newTask.save();

            // if no tasks list is there for user, create task list with  new task otherwise, push task to task list
            if (!user.tasks) {
                user.tasks = [newTask];
            }
            else {
                user.tasks.push(newTask);
            }

            await user.save();
            res.send(user);
        }
        catch (err) {
            res.send(err);
        }
    }

    // Delete task for a user; req body contains mobile,taskid
    public static async deleteTask(req: Request, res: Response) {
        try {
            //find the user with mobile number
            let user = await userModel.findOne({ mobile: req.body.mobile }).exec();
            console.log(user);
            if (user.tasks) { //use indexof-------------
                for (let i = 0; i < user.tasks.length; i++) {

                    if (req.body.taskid == user.tasks[i]._id) {
                        user.tasks.splice(i, 1);
                        await user.save();
                        let todos = await todoModel.deleteOne({ "_id": req.body.taskid }).exec();
                        res.send(user);
                        return;
                    }
                }
                res.send(`no task with id ${req.body.taskid} created for user `);
            }
            else {
                res.send(`user with mobile ${req.body.mobile} did not create any task`)
            }
        }
        catch (err) {
            res.send(err);
        }
    }
}



//_id and id params, body 62 line
//todoschema :mongoose.Schema.Types.ObjectId