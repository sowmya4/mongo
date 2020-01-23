export class Todo {
    private static count:number = 1;
    
    //properties
   
    public id: number;
    public msg: string;
    public isDone: boolean;
    public createdAt: Date;

    //method
    public constructor(msg: string) {
        this.id = Todo.count++; //returns and increments val
        this.msg = msg;
        this.isDone = false;
        this.createdAt = new Date();
    }

}