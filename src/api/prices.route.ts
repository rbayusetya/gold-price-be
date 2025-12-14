import { FastifyInstance } from "fastify";
import { getGoldPrice } from "../services/gold.service";

export async function pricesRoute(fastify: FastifyInstance) {
    fastify.get("/prices", async () => {
        return getGoldPrice();
    });
}
