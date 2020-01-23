import { Router } from 'express'
import { TodoController } from '../controllers/todoController';

export var todoApp: Router = Router();

// todoApp.post('/:mobile', TodoService.createTask);
// todoApp.get('/:mobile', TodoService.getAll);
// todoApp.get('/:mobile/:id', TodoService.get);
// todoApp.put('/:mobile/:id', TodoService.update);
// todoApp.get('/markComplete/:mobile/:id', TodoService.markForComplete);
// todoApp.delete('/:mobile/:id', TodoService.remove);
//todoApp.post()

todoApp.post('/',TodoController.create);
// todoApp.get('/',TodoController.getAll);
// todoApp.get('/:id',TodoController.get);
//todoApp.delete('/:id',TodoController.remove);