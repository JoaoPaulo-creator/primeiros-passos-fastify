import { prisma } from "../lib/prisma";

export type Car = {
  name: string;
  color: string;
  version: string;
  plate: string;
};

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

  async update(id: string, { name, color, version, plate }: Car) {
    const car = await prisma.carModel.update({
      where: {
        id,
      },
      data: {
        name,
        color,
        version,
        plate,
      },
    });

    return car;
  }

  async delete(id: string) {
    return await prisma.carModel.delete({
      where: {
        id: id,
      },
    });
  }
}

export default new CarRepository();
