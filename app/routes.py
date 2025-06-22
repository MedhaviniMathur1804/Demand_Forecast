from flask import request, jsonify
from .model import load_model, prepare_features

model = load_model()

def init_app(app):
    @app.route('/predict', methods=['POST'])
    def predict():
        data = request.get_json()
        try:
            features = prepare_features(data)
            prediction = model.predict([features])[0]
            return jsonify({'units_sold': int(prediction)})
        except Exception as e:
            return jsonify({'error': str(e)}), 400 