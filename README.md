# AdImpact — Advertising Spend vs Sales Impact

A responsive, deployable linear-regression dashboard for estimating sales revenue from YouTube, Instagram, Netflix, Prime Video, and JioHotstar advertising spend.

## What it includes

- In-browser ordinary least squares linear regression (no server or API keys)
- Deterministic 80/20 train/test split
- MAE, MSE, RMSE, and R² evaluation metrics
- Interactive spend controls and instant sales prediction
- Actual-versus-predicted validation chart and per-channel coefficients
- CSV and Excel dataset import

## Run locally

```bash
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd install` and `npm.cmd run dev` if PowerShell blocks `npm.ps1`.
Open the localhost URL Vite prints; do not rely on double-clicking the HTML file for development.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, select **Add New → Project** and import the repository.
3. Vercel detects the Vite project automatically. Click **Deploy**.

No environment variables are required.

## Import format

Upload a CSV, XLSX, or XLS file containing these columns (extra columns are okay):

`YouTube_Ad_Spend_Lakh`, `Instagram_Ad_Spend_Lakh`, `Netflix_Ad_Spend_Lakh`, `Prime_Video_Ad_Spend_Lakh`, `JioHotstar_Ad_Spend_Lakh`, and `Sales_Revenue_Lakh`.

The included 72-month campaign dataset is loaded by default.
