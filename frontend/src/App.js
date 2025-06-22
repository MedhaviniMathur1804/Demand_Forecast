import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [productName, setProductName] = useState('');
  const [forecastDate, setForecastDate] = useState('');
  const [forecastResult, setForecastResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState('checking');
  const [modelStatus, setModelStatus] = useState({ isTrained: false });

  const API_BASE_URL = 'http://localhost:5000/api';

  useEffect(() => {
    checkServerStatus();
  }, []);

  const checkServerStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/status`);
      const data = await response.json();
      setServerStatus('connected');
      setModelStatus(data.model || { isTrained: false });
    } catch (error) {
      setServerStatus('disconnected');
    }
  };

  const handleTrainModel = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/train`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      
      if (data.success) {
        setModelStatus({ isTrained: true, lastTrained: new Date().toISOString() });
        alert('Model trained successfully!');
      } else {
        alert(`Training failed: ${data.error}`);
      }
    } catch (error) {
      console.error('Error training model:', error);
      alert('Error training model. Please check if the backend server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForecast = async () => {
    if (!productName || !forecastDate) {
      alert('Please enter product name and forecast date.');
      return;
    }

    if (!modelStatus.isTrained) {
      alert('Model not trained. Please train the model first.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/forecast`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName,
          forecastDate,
        }),
      });

      const data = await response.json();

      if (data.success) {
        const forecast = data.forecast;
        setForecastResult(
          `Forecast for ${forecast.productName} on ${forecast.forecastDate}: ${forecast.predictedDemand} ${forecast.unit} (Confidence: ${(forecast.confidence * 100).toFixed(1)}%)`
        );
      } else {
        alert(`Forecast failed: ${data.error}`);
      }
    } catch (error) {
      console.error('Error making forecast:', error);
      alert('Error making forecast. Please check if the backend server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Demand Forecast</h1>
        
        <div className="status-container">
          <h3>Server Status</h3>
          <p>{serverStatus === 'connected' ? '✓ Connected' : serverStatus === 'disconnected' ? '✗ Disconnected' : 'Checking...'}</p>
        </div>

        <div className="status-container">
          <h3>Model Status</h3>
          <p>{modelStatus.isTrained ? '✓ Model trained' : '✗ Model not trained'}</p>
        </div>

        <div className="button-container">
          <button 
            onClick={handleTrainModel} 
            disabled={isLoading || serverStatus !== 'connected'}
            className="train-button"
          >
            {isLoading ? 'Training...' : 'Train Model'}
          </button>
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            disabled={!modelStatus.isTrained}
          />
          <input
            type="date"
            value={forecastDate}
            onChange={(e) => setForecastDate(e.target.value)}
            disabled={!modelStatus.isTrained}
          />
          <button 
            onClick={handleForecast} 
            disabled={isLoading || !modelStatus.isTrained}
          >
            {isLoading ? 'Forecasting...' : 'Forecast'}
          </button>
        </div>

        {forecastResult && (
          <div className="result-container">
            <p>{forecastResult}</p>
          </div>
        )}

        <div className="instructions">
          <h3>Setup Instructions:</h3>
          <ol>
            <li>Download the retail sales dataset from <a href="https://www.kaggle.com/datasets/tevecsystems/retail-sales-forecasting" target="_blank" rel="noopener noreferrer">Kaggle</a></li>
            <li>Place the CSV file in the backend directory as "retail_sales_data.csv"</li>
            <li>Start the backend server: <code>cd backend && npm start</code></li>
            <li>Train the model using the "Train Model" button</li>
            <li>Make forecasts by entering product name and date</li>
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App; 