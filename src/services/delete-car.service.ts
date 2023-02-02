import carRepository from "../repository/car.repository";

export async function deleteCarService(id: string) {
  return await carRepository.delete(id);
}
