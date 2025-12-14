# Gold Price Tracker Backend

A small **TypeScript + Fastify** backend that periodically fetches **gold prices (USD)** and **USD→IDR FX rates**, stores them in simple text files, and exposes data for future graphing.

Designed as a **learning-focused side project** with a clean separation between API and cron workers.

---

## Features

* Fastify API (TypeScript, type-safe)
* Background cron worker (separate process)
* Gold price fetching (goldapi.io)
* FX rate fetching (Frankfurter, no API key)
* Quota-safe cron scheduling
* Simple append-only text storage (JSONL)

---

## Tech Stack

* Node.js
* TypeScript
* Fastify
* node-cron
* dotenv

---

## Project Structure

```
src/
├─ api/            # HTTP routes
├─ services/       # Business logic (FX, gold)
├─ jobs/           # Cron jobs
├─ db/             # Simple file storage
├─ cron.ts         # Cron worker entry
└─ app.ts          # API server entry

data/
├─ fx.jsonl
└─ gold.jsonl
```

---

## Setup

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env` file:

```
GOLD_API_KEY=your_goldapi_key
GOLD_FETCH_MODE=manual
NODE_ENV=development
```

`GOLD_FETCH_MODE`:

* `manual` → gold fetched only when triggered manually
* `daily` → gold fetched by daily cron (production)

---

## Running the App

### 1️⃣ Run API server

```bash
npm run dev
```

Runs:

```
src/app.ts
```

---

### 2️⃣ Run cron worker (separate terminal)

```bash
npm run cron:dev
```

Runs:

```
src/cron.ts
```

Cron behavior:

* FX → every **5 minutes** (10s in dev)
* Gold → **daily** (or manual in dev)
* Immediate first run on startup

---

## Development Notes

* API and cron **must run as separate processes**
* Gold API calls are quota-limited → guarded by env flags
* FX is fetched frequently, gold sparingly
* Data stored as JSON Lines (`.jsonl`) for easy parsing

---

## Example Logs

```
[CRON] initial run
[FX OK] { rate: 16652 }
[GOLD OK] { usd: 4299.39 }
[CRON][FX] tick
```

---

## Next Steps

* Expose `/api/latest`
* Aggregate data for charts
* Migrate storage to SQLite
* Add retries and backoff

---

## License

MIT
