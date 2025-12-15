export const SUPPORTED_CURRENCIES = [
    "USD",
    "IDR",
    "EUR",
    "JPY",
    "SGD"
] as const;

export type Currency = typeof SUPPORTED_CURRENCIES[number];
