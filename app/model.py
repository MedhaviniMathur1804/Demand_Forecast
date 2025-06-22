import joblib
import datetime
import os

def load_model():
    model_path = os.path.join(os.path.dirname(__file__), '..', 'model.joblib')
    return joblib.load(model_path)

def prepare_features(data):
    # Expecting: date, product_id, store_id, promo, holiday, price
    date = datetime.datetime.strptime(data['date'], '%Y-%m-%d')
    day = date.day
    product_id = int(data['product_id'])
    store_id = int(data['store_id'])
    promo = int(data['promo'])
    holiday = int(data['holiday'])
    price = float(data['price'])
    return [day, product_id, store_id, promo, holiday, price] 