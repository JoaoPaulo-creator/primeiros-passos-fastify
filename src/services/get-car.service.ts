import CarRepository from "../repository/car.repository";

export async function getCarService(id: string) {
  const findCar = await CarRepository.index(id);
  return findCar;
}
