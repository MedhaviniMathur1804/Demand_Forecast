import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import joblib

# Load data
df = pd.read_csv('sample_data.csv')

# Feature engineering
df['Date'] = pd.to_datetime(df['Date'])
df['Day'] = df['Date'].dt.day
X = df[['Day', 'Product_ID', 'Store_ID', 'Promo', 'Holiday', 'Price']]
y = df['Units_Sold']

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestRegressor(n_estimators=10, random_state=42)
model.fit(X_train, y_train)

# Save model
joblib.dump(model, 'model.joblib') 