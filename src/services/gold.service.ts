const GOLD_API_KEY = process.env.GOLD_API_KEY;

export async function getGoldPrice() {
    try {
        if (!GOLD_API_KEY) {
            throw new Error("GOLD_API_KEY not set");
        }

        const res = await fetch("https://www.goldapi.io/api/XAU/USD", {
            headers: { "x-access-token": GOLD_API_KEY }
        });

        if (!res.ok) {
            throw new Error(`GOLD HTTP ${res.status}`);
        }

        const data = await res.json();

        return {
            usd: data.price,
            timestamp: Date.now()
        };
    } catch (e) {
        console.error("[GOLD ERROR]", e);
        throw e;
    }
}
