import { getGoldPrice } from "../services/gold.service";
import {saveLine} from "../db/fileDb";

export async function fetchGoldJob() {
    console.log("[GOLD FETCH] calling goldapi.io :");
    try{
        const gold = await getGoldPrice();
        console.log("[GOLD OK]", gold);
        saveLine("data/gold.jsonl", gold);
    } catch {

    }
}
