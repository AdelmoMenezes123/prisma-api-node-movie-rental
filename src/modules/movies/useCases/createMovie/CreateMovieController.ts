import { CreateMovieUseCase } from "./CreateMovieUseCase";
import { Request, Response } from "express";

export class CreateMovieController {
  async handle(req: Request, res: Response) {
    const { title, release_date, duration } = req.body;

    const createMovieUseCase = new CreateMovieUseCase();

    const result = await createMovieUseCase.execute({
      title,
      release_date,
      duration,
    });

    return res.status(201).json(result);
  }
}
