import { prisma } from "../lib/prisma";


export async function getCarService(id: string){
    return await prisma.carModel.findUnique({
        where: {
            id
        }
    })
}