import { Currency } from "../config/currency";

export interface GoldPrice {
    base: "USD";
    usd: number;
    converted: Partial<Record<Currency, number>>;
    timestamp: number;
}
