import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
  async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
    // verifica se o Filme existe
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (movieExists) {
      throw new AppError("Movie does not exists!");
    }
    // verifica se o filme nao esta alugado por outra pessoa
    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId,
      },
    });
    if (movieAlreadyRented) {
      throw new AppError("Movie already rented!");
    }
    // verifica se o usuario existe
    const useExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (useExists) {
      throw new AppError("User does not exists!");
    }
    // criar locação
    await prisma.movieRent.create({
      data: {
        userId,
        movieId,
      },
    });
  }
}
