import carRepository from "../repository/car.repository";

export async function getCars() {
  return await carRepository.show();
}
