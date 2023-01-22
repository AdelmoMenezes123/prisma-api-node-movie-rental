import { GetAllUserUseCase } from "./GetAllUsersUseCase";
import { Request, Response } from "express";

export class GetAllUserController {
  async handle(req: Request, res: Response) {
    const getAllUserUseCase = new GetAllUserUseCase();
    const result = await getAllUserUseCase.execute();
    return res.status(201).json(result);
  }
}
