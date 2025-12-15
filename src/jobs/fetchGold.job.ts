import { fetchGoldUsdFromApi } from "../services/goldFetcher.service";
import {saveLine} from "../db/fileDb";
import {saveGoldLatest} from "../db/gold.store";

export async function fetchGoldJob() {
    try {
        const gold = await fetchGoldUsdFromApi();
        saveLine("data/gold.jsonl", gold);
        saveGoldLatest({
            base: "USD",
            usd: gold.usd,
            converted: {}, // computed at read time
            timestamp: gold.timestamp
        });
        console.log("[GOLD SAVED]", gold);
    } catch (e) {
        console.error("[GOLD ERROR]", e);
    }
}
