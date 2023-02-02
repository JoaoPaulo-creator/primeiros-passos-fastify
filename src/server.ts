import cors from '@fastify/cors';
import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
const app = Fastify()
const prisma = new PrismaClient()

app.get('/', async () => {
   const cars = await prisma.carModel.findMany({
    where: {
        color: {
            contains: 'red'
        }
    }
   })
   return cars
})
app.register(cors)
app.listen({
    port: 3334
}).then(() => {
    console.log('Server started successfully')
}).catch(err => console.error(err))
