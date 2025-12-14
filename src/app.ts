import Fastify from "fastify";
import {pricesRoute} from "./api/prices.route";

const app = Fastify();

app.get("/", async () => {
    return { message: "Hello Fastify + TS" };
});

app.register(pricesRoute, { prefix: "/api" });

app.listen({ port: 3000 }, () => {
    console.log("Server running on http://localhost:3000");
});
