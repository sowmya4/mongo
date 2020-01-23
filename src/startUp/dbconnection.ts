import * as mongoose from 'mongoose';
//mongodb+srv://admin:<password>@cluster0-giyly.mongodb.net/test
export class DbConnection{
    private static mongodbUrl: string = "mongodb+srv://admin:password_12@cluster0-giyly.mongodb.net/test";
    
    public static setUpDB(){
     mongoose.connect(DbConnection.mongodbUrl).then(()=>{
         console.log("db connection successfull");
     })
     .catch(()=>{
        console.log("got error");
         console.log("connection failed");
     })
    }
}