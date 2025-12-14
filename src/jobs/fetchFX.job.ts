import { getUsdToIdrRate } from "../services/currency.service";
import {saveLine} from "../db/fileDb";

export async function fetchFxJob() {
    try{
        const fx = await getUsdToIdrRate();
        console.log("[FX OK]", fx);
        saveLine("data/fx.jsonl", fx);
    }catch {

    }
}
