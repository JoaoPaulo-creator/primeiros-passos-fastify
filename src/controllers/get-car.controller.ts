import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { getCarService } from "../services/get-car.service";

export async function getCarController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const idToString = z.object({
    id: z.string(),
  });

  const { id } = idToString.parse(request.params);
  const car = await getCarService(id);

  if (!car) {
    return reply.code(400).send({ error: "Car not found" });
  }
  return car;
}
