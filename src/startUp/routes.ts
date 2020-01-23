import * as express from 'express';
import { todoApp } from '../routes/todoApp';
import { userApp } from '../routes/userApp';

export class Routes{
    public static RegisterRoutes(app: express.Application): void{
        app.use('/todos',todoApp);
        app.use('/users',userApp);

    }
}