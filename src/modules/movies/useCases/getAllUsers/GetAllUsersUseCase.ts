import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
export class GetAllUserUseCase {
  async execute(): Promise<User[]> {
    const user = await prisma.user.findMany({
      include: {
        movie_rent: {
          select: {
            movie: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });
    return user;
  }
}
