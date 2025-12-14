import { appendFileSync } from "fs";

export function saveLine(file: string, data: unknown) {
    appendFileSync(file, JSON.stringify(data) + "\n");
}
