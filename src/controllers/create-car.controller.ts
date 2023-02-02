import { FastifyRequest } from "fastify";
import { z } from 'zod';
import { prisma } from "../lib/prisma";


export async function createCarController(request: FastifyRequest) {
    const createCarBoy = z.object({
        name: z.string(),
        color: z.string(),
        version: z.string(),
        plate: z.string()
    })

    const { name, color, version, plate } = createCarBoy.parse(request.body)
    
    const createCar = await prisma.carModel.create({
        data: {
            name,
            color,
            version,
            plate
        }
    })
    return createCar
}