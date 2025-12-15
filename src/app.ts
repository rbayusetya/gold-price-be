import Fastify from "fastify";
import { goldRoute } from "./api/gold.route";
import {fxRoute} from "./api/fx.route";

const app = Fastify();

app.get("/", async () => {
    return { message: "Hello Fastify + TS" };
});

app.register(goldRoute, { prefix: "/api" });
app.register(fxRoute, { prefix: "/api" });

app.listen({ port: 3000 }, () => {
    console.log("Server running on http://localhost:3000");
});
