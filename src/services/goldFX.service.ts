import { Currency } from "../config/currency";
import { FX_TARGETS } from "../config/FX";
import { loadGoldLatest } from "../db/gold.store";
import { getStoredFxRate } from "./currency.service";
import { GoldPrice } from "../models/gold";

export function getStoredGoldPrices(): GoldPrice {
    const gold = loadGoldLatest();
    if (!gold) throw new Error("Gold not available");

    const converted: Partial<Record<Currency, number>> = {};

    for (const cur of FX_TARGETS) {
        if (cur === "USD") continue;
        converted[cur] = gold.usd * getStoredFxRate("USD", cur);
    }

    return {
        ...gold,
        converted
    };
}
