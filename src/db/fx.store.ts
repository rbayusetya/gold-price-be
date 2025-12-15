import { existsSync, readFileSync, writeFileSync } from "fs";
import { Currency } from "../config/currency";

export interface FxSnapshot {
    base: Currency;
    rates: Partial<Record<Currency, number>>;
    timestamp: number;
}

const FILE = "data/fx-latest.json";

export function saveFxLatest(data: FxSnapshot) {
    writeFileSync(FILE, JSON.stringify(data, null, 2));
}

export function loadFxLatest(): FxSnapshot | null {
    if (!existsSync(FILE)) return null;
    return JSON.parse(readFileSync(FILE, "utf-8")) as FxSnapshot;
}
