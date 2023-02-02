import carRepository, { Car } from "../repository/car.repository";

export async function updateCarService(id: string, car: Car) {
  return await carRepository.update(id, car);
}
