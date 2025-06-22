import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
import pickle
import os

class DemandForecastModel:
    def __init__(self):
        self.model = None
        self.is_trained = False
        
    def load_data(self, file_path):
        try:
            df = pd.read_csv(file_path)
            print(f"Dataset loaded: {df.shape}")
            return df
        except Exception as e:
            print(f"Error loading data: {e}")
            return None
    
    def preprocess_data(self, df):
        data = df.copy()
        data = data.dropna()
        
        # Find target column
        target_candidates = ['sales', 'quantity', 'demand', 'units']
        target_column = None
        for candidate in target_candidates:
            if candidate in data.columns:
                target_column = candidate
                break
        
        if target_column is None:
            numeric_cols = data.select_dtypes(include=[np.number]).columns
            target_column = numeric_cols[-1]
        
        feature_columns = [col for col in data.columns if col != target_column]
        X = data[feature_columns].select_dtypes(include=[np.number])
        y = data[target_column]
        
        return X, y
    
    def train_model(self, X, y):
        try:
            self.model = RandomForestRegressor(n_estimators=100, random_state=42)
            self.model.fit(X, y)
            self.is_trained = True
            print("Model trained successfully!")
            return True
        except Exception as e:
            print(f"Error training model: {e}")
            return False
    
    def predict(self, input_data):
        if not self.is_trained:
            return None
        try:
            prediction = self.model.predict([input_data])
            return prediction[0]
        except Exception as e:
            print(f"Error making prediction: {e}")
            return None
    
    def save_model(self, filepath):
        if self.is_trained:
            with open(filepath, 'wb') as f:
                pickle.dump(self.model, f)
            print(f"Model saved to {filepath}")
    
    def load_model(self, filepath):
        try:
            with open(filepath, 'rb') as f:
                self.model = pickle.load(f)
            self.is_trained = True
            print(f"Model loaded from {filepath}")
            return True
        except Exception as e:
            print(f"Error loading model: {e}")
            return False

def main():
    model = DemandForecastModel()
    dataset_path = "retail_sales_data.csv"
    
    if not os.path.exists(dataset_path):
        print(f"Dataset file {dataset_path} not found!")
        return
    
    df = model.load_data(dataset_path)
    if df is None:
        return
    
    X, y = model.preprocess_data(df)
    success = model.train_model(X, y)
    
    if success:
        model.save_model("trained_model.pkl")

if __name__ == "__main__":
    main() 