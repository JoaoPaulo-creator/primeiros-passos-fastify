import { FastifyRequest } from "fastify";
import { z } from "zod";
import { getCarService } from "../services/get-car.service";

export async function getCarController(request: FastifyRequest) {
  const idToString = z.object({
    id: z.string(),
  });

  const { id } = idToString.parse(request.params);
  const car = await getCarService(id);
  return car;
}
