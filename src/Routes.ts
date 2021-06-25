import {Router} from "express";
import {CreateUsersController} from "./Controllers/CreateUsersController";

const router = Router();
const createUserController = new CreateUsersController();
const teste = createUserController.handle;
router.post("/users", createUserController.handle);

export {router}

