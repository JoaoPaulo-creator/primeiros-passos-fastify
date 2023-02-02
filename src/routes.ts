import { FastifyInstance } from "fastify";

import { createCarController } from "./controllers/create-car.controller";
import { getCarController } from "./controllers/get-car.controller";

export async function routes(app: FastifyInstance){
    
    app.get('/car/:id', getCarController)
    app.post('/create-car', createCarController)

}