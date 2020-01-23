import * as express from "express";

export class Middleware{
    public static mw1(req:express.Request,res:express.Response,next:any){
        // console.log(`mw1 called start`);
        
        next();
        //console.log(`mw1 called end`);
        //res.send(`there is a bug`)
       
    }
    public static mw2(req:express.Request,res:express.Response,next:any){
        // console.log(`mw2 called start`);
        
        next();
        // console.log(`mw2 called end`);
    }
    public static mw3(req:express.Request,res:express.Response,next:any){
        // console.log(`mw3 called start`);
         next();
       //    console.log(`mw3 called end`);
    }
}