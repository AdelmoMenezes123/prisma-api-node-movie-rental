import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { nome, email } = req.body;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({ nome, email });

    return res.status(201).json(result);
  }
}
