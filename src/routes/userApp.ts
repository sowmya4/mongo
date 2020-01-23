import {Router}  from 'express'
import { UserService2 } from '../services/userService2';

export var userApp: Router= Router();

// userApp.post('',UserService.register);
// userApp.get('',UserService.getUsers);


userApp.post('/',UserService2.createNewUser);
userApp.post('/task',UserService2.addTask);
userApp.get('/',UserService2.getAllUsers);
userApp.put('/',UserService2.updateUserMobile);
userApp.delete('',UserService2.deleteTask);