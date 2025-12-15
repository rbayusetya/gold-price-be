import { FastifyInstance } from "fastify";
import {getStoredGoldPrices} from "../services/goldFX.service";

export async function goldRoute(fastify: FastifyInstance) {
    fastify.get("/gold/latest", async (_,reply) => {
        try{
            return getStoredGoldPrices();
        }catch(err){
            reply.code(503);
            return {
                error: (err as Error).message
            };
        }
    });
}
