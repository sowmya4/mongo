import { Request, Response } from "express";
import { User } from "../models/user";

export class UserService {
    public static users: User[] = [];
    
    //@input - {"name": string,mobile:string,password:string} 
    //register a user with unique mob num
    public static register(req: Request, res: Response) {
        let user:User = UserService.findByMobile(req.body.mobile);
        if (user) {
            res.send(`user is already registered`);
            return;
        }

        let newUser:User = new User(req.body.name,req.body.mobile,req.body.password);
        UserService.users.push(newUser);
        res.send(`new user with ${req.body.mobile} is registered`);

    }

    public static getUsers(req: Request, res: Response){
        res.send(UserService.users);
    }

    //find a user already present or not
    public static findByMobile(mob: string) {
        for (let user of UserService.users) {
            if (user.mobile === mob) {
                return user;
            }

        }
        return null;
    }
}