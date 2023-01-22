import { Router } from "express";
import { GetAllUserController } from "../modules/movies/useCases/getAllUsers/GetAllUserController";
import { CreateUserController } from "./../modules/users/useCases/createUser/CreateUserController";
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();

const userRoutes = Router();
userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUserController.handle);
export { userRoutes };
