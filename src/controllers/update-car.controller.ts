import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { updateCarService } from "../services/update-car.service";

export async function updateCarController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const idParsed = z
    .object({
      id: z.string(),
    })
    .strict();

  const bodyParsed = z.object({
    name: z.string(),
    version: z.string(),
    color: z.string(),
    plate: z.string(),
  });

  try {
    const { id } = idParsed.parse(request.params);

    const { name, version, color, plate } = bodyParsed.parse(request.body);

    const updatedCar = await updateCarService(id, {
      name,
      version,
      color,
      plate,
    });

    return reply.code(200).send(updatedCar);
  } catch (error) {
    console.error(error);
  }
}
