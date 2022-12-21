import { AppError } from "./../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
  async execute({ nome, email }: CreateUserDTO) {
    // verifica se o usuario existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }
    // criar o usuario
    const user = await prisma.user.create({
      data: {
        nome,
        email,
      },
    });

    return user;
  }
}
