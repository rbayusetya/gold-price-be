import { readFileSync, writeFileSync, existsSync } from "fs";
import { GoldPrice } from "../models/gold";

const FILE = "data/gold-latest.json";

export function saveGoldLatest(data: GoldPrice) {
    writeFileSync(FILE, JSON.stringify(data, null, 2));
}

export function loadGoldLatest(): GoldPrice | null {
    if (!existsSync(FILE)) return null;

    return JSON.parse(readFileSync(FILE, "utf-8")) as GoldPrice;
}
