export class TodoModelDto{
    public _id: string;
    public task: string;
    public priority: string;
    public isComplete: boolean;
    public createdAt: Date;

    public constructor(data: any){
        this._id = data._id;
        this.task = data.task;
        this.priority = data.priority;
        this.isComplete = data.isComplete;
        this.createdAt = data.createdAt
    }
}