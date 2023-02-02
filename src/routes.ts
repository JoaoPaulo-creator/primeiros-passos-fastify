import { FastifyInstance } from "fastify";

import { createCarController } from "./controllers/create-car.controller";
import { deleteCarController } from "./controllers/delete-car.controller";
import { getAllCarsController } from "./controllers/get-all-cars.controller";
import { getCarController } from "./controllers/get-car.controller";
import { updateCarController } from "./controllers/update-car.controller";

export async function routes(app: FastifyInstance) {
  app.get("/car/:id", getCarController);
  app.get("/car-list", getAllCarsController);
  app.post("/create-car", createCarController);
  app.put("/update-car/:id", updateCarController);
  app.delete("/delete-car/:id", deleteCarController);
}
