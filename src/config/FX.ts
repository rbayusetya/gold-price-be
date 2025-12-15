import { Currency, SUPPORTED_CURRENCIES } from "./currency";

export const FX_BASE: Currency =
    (process.env.FX_BASE as Currency) ?? "USD";

export const FX_TARGETS: Currency[] =
    process.env.FX_TARGETS
        ? process.env.FX_TARGETS
            .split(",")
            .map(c => c.trim())
            .filter(
                (c): c is Currency =>
                    SUPPORTED_CURRENCIES.includes(c as Currency)
            )
        : ["IDR"];
