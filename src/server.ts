import * as express from 'express'
import * as bodyParser from 'body-parser'
import { TodoService } from './services/todoService';
import { UserService } from './services/userService';
import { Middleware } from './models/middleware';
import { threadId } from 'worker_threads';
import { todoApp } from './routes/todoApp';
import { userApp } from './routes/userApp';
import { Routes } from './startUp/routes';
import { DbConnection } from './startUp/dbconnection';

class Server {
    private static count: number = 0;
    private static port: number = 8000;

    //properties
    public app: express.Application;


    //methods
    public constructor() {
        this.app = express();

        this.configBodyParser();
        
        this.app.use(Middleware.mw1);
        this.app.use('/todos',Middleware.mw2);

        DbConnection.setUpDB();

        Routes.RegisterRoutes(this.app);

    
        
        // this.app.post('/todos/:mobile', TodoService.createTask);
        // this.app.get('/todos/:mobile', TodoService.getAll);
        // this.app.get('/todos/:mobile/:id', TodoService.get);
        // this.app.put('/todos/:mobile/:id', TodoService.update);
        // this.app.get('/todos/markComplete/:mobile/:id', TodoService.markForComplete);
        // this.app.delete('/todos/:mobile/:id', TodoService.remove);
        //this.app.post('/user',UserService.register);
        //this.app.get('/user',Middleware.mw2,Middleware.mw3,UserService.getUsers);

       // this.app.use('/test',Server.testApiHandler)  //used for all http verbs
       


        this.app.listen(Server.port, Server.bootupListener)
    }

    private configBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    private static bootupListener() {
        console.log(`server is running on port ${Server.port}`)
    }

    private static testApiHandler(req:express.Request,res:express.Response){
       res.send(`test api called`);
    }

}
new Server();



