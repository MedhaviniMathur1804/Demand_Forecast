import os
import psycopg2

def get_db_connection():
    db_url = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(db_url)
    return conn 