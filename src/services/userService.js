import UserModel from "../models/user"

class UserServices {
    static async registerUser(req){ //async function is a function which inform application to wait until line5 run 
        //registerUser is function which register user
const user=UserModel.create(req.body); //req body means it will pass data from body in post man


return user;
    }

    static testFunction(req){
 
     req.body.names = req.body.names.toUpperCase();
     const {num1,num2} = req.body;
     const sum = num1 + num2;
    req.body.sum = sum;
           return req.body;
 
    }
 }
 export default UserServices;