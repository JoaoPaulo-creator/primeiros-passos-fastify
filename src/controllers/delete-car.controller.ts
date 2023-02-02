import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { deleteCarService } from "../services/delete-car.service";
import { getCarService } from "../services/get-car.service";

export async function deleteCarController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const paramType = z.object({
    id: z.string(),
  });

  const { id } = paramType.parse(request.params);
  const findCar = await getCarService(id);

  if (!findCar) {
    return reply.code(404).send({ erro: "Car not found" });
  }

  await deleteCarService(id);

  return reply.code(204).send();
}
