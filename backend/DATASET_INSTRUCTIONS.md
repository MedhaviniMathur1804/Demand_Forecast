# Dataset Setup Instructions

## Required Dataset

This application requires the **Retail Sales Forecasting** dataset from Kaggle.

### Download Instructions

1. **Go to the dataset page:**
   https://www.kaggle.com/datasets/tevecsystems/retail-sales-forecasting

2. **Download the dataset:**
   - Click the "Download" button
   - Extract the downloaded ZIP file

3. **Rename and place the file:**
   - Rename the CSV file to `retail_sales_data.csv`
   - Place it in the `backend` directory (same folder as this file)

### File Structure After Setup

```
backend/
├── server.js
├── forecast_model.py
├── requirements.txt
├── retail_sales_data.csv  ← Place the dataset here
└── DATASET_INSTRUCTIONS.md
```

### Dataset Information

- **Source:** Kaggle - Retail Sales Forecasting
- **Format:** CSV
- **Required filename:** `retail_sales_data.csv`
- **Size:** Varies (typically 1-10 MB)

### Troubleshooting

- **"Dataset not found" error:** Make sure the file is named exactly `retail_sales_data.csv`
- **"Invalid CSV format" error:** Ensure the file is a valid CSV and not corrupted
- **"Permission denied" error:** Make sure you have read permissions for the file

### Alternative: Sample Data

If you want to test the application without the full dataset, you can create a simple CSV file with these columns:
- `date` (YYYY-MM-DD format)
- `product_id` (numeric)
- `sales` (numeric)
- `quantity` (numeric)

Example:
```csv
date,product_id,sales,quantity
2023-01-01,1,100.50,10
2023-01-02,1,120.75,12
2023-01-03,1,95.25,8
``` 