import { FastifyInstance } from "fastify";
import { loadFxLatest } from "../db/fx.store";

export async function fxRoute(fastify: FastifyInstance) {
    fastify.get("/fx/latest", async (_, reply) => {
        const fx = loadFxLatest();

        if (!fx) {
            reply.code(503);
            return { error: "FX data not available yet" };
        }

        return fx;
    });
}
