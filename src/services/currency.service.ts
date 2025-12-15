import { loadFxLatest } from "../db/fx.store";
import { Currency } from "../config/currency";

export function getStoredFxRate(
    from: Currency,
    to: Currency
) {
    const fx = loadFxLatest();
    if (!fx) throw new Error("FX not available");

    if (from === to) return 1;
    if (fx.base !== from) {
        throw new Error(`FX base mismatch`);
    }

    const rate = fx.rates[to];
    if (!rate) throw new Error(`FX rate missing`);

    return rate;
}
