import {Request, Response} from "express";
import {CreateUserService} from "../services/CreateUserService";

class CreateUsersController{

    async handle(request : Request, response : Response){
        const test = 1;
        const {  name, email, admin} = request.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email, admin});

        return response.json(user);
    }
}

export {CreateUsersController};
