import { fetchFxRateFromApi } from "../services/fxFetcher.service";
import { FX_BASE, FX_TARGETS } from "../config/FX";
import { saveFxLatest } from "../db/fx.store";
import { Currency } from "../config/currency";

export async function fetchFxJob() {
    const rates: Partial<Record<Currency, number>> = {};

    for (const to of FX_TARGETS) {
        if (to === FX_BASE) continue;

        try {
            rates[to] = await fetchFxRateFromApi(FX_BASE, to);
        } catch (e) {
            console.error("[FX ERROR]", FX_BASE, to, e);
        }
    }

    saveFxLatest({
        base: FX_BASE,
        rates,
        timestamp: Date.now()
    });
}
