import cors from '@fastify/cors';
import Fastify from "fastify";
import { routes } from './routes';
const app = Fastify()

app.register(cors)
app.register(routes)

app.listen({
    port: 3334
}).then(() => {
    console.log('Server started successfully')
}).catch(err => console.error(err))
