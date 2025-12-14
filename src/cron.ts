import "dotenv/config";
import cron from "node-cron";
import { fetchFxJob } from "./jobs/fetchFX.job";
import { fetchGoldJob } from "./jobs/fetchGold.job";

const isDev = process.env.NODE_ENV !== "production";
const GOLD_MODE = process.env.NODE_ENV ?? "manual";

// schedules
const FX_SCHEDULE = isDev ? "*/10 * * * * *" : "*/5 * * * *";
const GOLD_SCHEDULE = isDev ? "*/30 * * * * *" : "0 0 * * *";
async function runOnce() {
    console.log("[CRON] initial run");
    await fetchFxJob();
    await fetchGoldJob();
}

async function runGold(){
    if(GOLD_MODE === "manual"){
        console.log("[GOLD] manual run, skipping cron");
        return;
    }

    await fetchGoldJob();
}

// run immediately
runOnce();

// schedule FX
cron.schedule(FX_SCHEDULE, async () => {
    console.log("[CRON][FX] tick");
    await fetchFxJob();
});

// schedule GOLD
cron.schedule(GOLD_SCHEDULE, async () => {
    console.log("[CRON][GOLD] tick");
    await fetchGoldJob();
});

console.log("[CRON] scheduled");
