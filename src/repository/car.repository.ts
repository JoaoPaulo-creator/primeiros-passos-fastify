import { prisma } from "../lib/prisma";

class CarRepository {
  async index(id: string) {
    return await prisma.carModel.findUnique({
      where: {
        id,
      },
    });
  }

  async show() {
    const cars = await prisma.carModel.findMany();
    return cars;
  }
}

export default new CarRepository();
