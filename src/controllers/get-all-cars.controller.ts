import { getCars } from "../services/get-cars.service";

export async function getAllCarsController() {
  return await getCars();
}
