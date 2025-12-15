import { Currency } from "../config/currency";

type FxApiResponse = {
    rates: Record<string, number>;
};

export async function fetchFxRateFromApi(
    from: Currency,
    to: Currency
) {
    const res = await fetch(
        `https://api.frankfurter.app/latest?from=${from}&to=${to}`
    );

    if (!res.ok) {
        throw new Error(`FX HTTP ${res.status}`);
    }

    const data = (await res.json()) as FxApiResponse;

    const rate = data.rates[to];
    if (!rate) {
        throw new Error(`FX rate missing for ${to}`);
    }

    return rate;
}
