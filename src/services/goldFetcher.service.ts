export async function fetchGoldUsdFromApi() {
    const res = await fetch("https://www.goldapi.io/api/XAU/USD", {
        headers: { "x-access-token": process.env.GOLD_API_KEY! }
    });

    if (!res.ok) {
        throw new Error(`GOLD HTTP ${res.status}`);
    }

    const data = await res.json();

    return {
        usd: data.price as number,
        timestamp: Date.now()
    };
}
