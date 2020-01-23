import { Todo } from "./todo";

export class User{
  private static count:number = 1;

  //properties
  public id: number;
  public name:string;
  public mobile: string;
  public password: string;

  public tasks: Todo[];
  
  //methods
  public constructor(name:string,mobile:string,password:string){
      this.id = User.count++;
      this.name= name;
      this.mobile = mobile;
      this.password = password;
      this.tasks =[];
  }


}