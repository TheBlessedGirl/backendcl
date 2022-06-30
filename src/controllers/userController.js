import UserServices from "../services/userService";
class UserController {
    static async registerUser(req,res){
        const newUser= await UserServices.registerUser(req);
        if (!newUser){
            return res.status(404).json({message:"failed to register"})//404 is a status code to say it didn't run or false while 201 is true registration done
        }
        return res.status(201).json({message:"success",data:newUser});
    }



    static testController(req,res){
        const test = UserServices.testFunction(req);

        return res.status(200).json({
            message:"Ok! Successfully",
            data: test
        })
    }
}
export default UserController;