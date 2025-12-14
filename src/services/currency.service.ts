export async function getUsdToIdrRate() {
    try {
        const res = await fetch(
            "https://api.frankfurter.app/latest?from=USD&to=IDR"
        );

        if (!res.ok) throw new Error(`FX HTTP ${res.status}`);

        const data = await res.json();

        return {
            rate: data.rates.IDR,
            timestamp: Date.now()
        };
    } catch (e) {
        console.error("[FX ERROR]", e);
        throw e;
    }
}
