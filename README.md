# Gold & FX Price Backend

A Node.js + TypeScript backend that fetches gold prices and foreign exchange (FX) rates using cron jobs, 
stores the results locally, and serves fast, cache-only APIs, designed to avoid calling external APIs during HTTP requests.
---

## Features

* Cron-based data fetching
* Gold price in USD with FX-based conversion
* Multi-currency support (USD, IDR, etc.)
* File-based persistence
* Fully type-safe (TypeScript)

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
├── api/
│   ├── gold.route.ts
│   └── fx.route.ts
├── jobs/
│   ├── fetchGold.job.ts
│   └── fetchFx.job.ts
├── services/
│   ├── goldFetcher.service.ts  
│   ├── fxFetcher.service.ts     
│   ├── goldFx.service.ts        
│   └── currency.service.ts     
├── db/
│   ├── gold.store.ts
│   └── fx.store.ts
├── config/
│   ├── currency.ts
│   └── fx.ts
├── cron.ts
└── app.ts
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

---

## Development Notes

* API and cron **must run as separate processes**
* Gold API calls are quota-limited → guarded by env flags
* FX is fetched frequently, gold sparingly
* Data stored as JSON Lines (`.jsonl`) for easy parsing

---