from flask import Flask, request, jsonify, render_template, redirect, url_for, session
import pyodbc
import os
import time
from dotenv import load_dotenv
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

load_dotenv()

def get_db_connection():
    conn = pyodbc.connect(
        f"DRIVER={os.getenv('DB_DRIVER')};"
        f"SERVER={os.getenv('DB_SERVER')};"
        f"DATABASE={os.getenv('DB_NAME')};"
        f"UID={os.getenv('DB_UID')};"
        f"PWD={os.getenv('DB_PWD')};"
        f"TrustServerCertificate={os.getenv('TRUST_SERVER_CERTIFICATE')};"
    )

    return conn

@app.route('/api/search', methods=['GET'])
def search():
    query = request.args.get('q', '')
    category = request.args.get('category', 'all')
    query = query.strip()
    print(f"Query: {query}, Category: {category}")
    if not query:
        return jsonify({
            'products_count': 0,
            'query': '',
            'category': category,
            'execution_time': 0
        })
    
    start_time = time.time()

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        sql = f"SELECT COUNT(*) FROM products WHERE LOWER(name) LIKE '%{query}%'"

        if category != 'all':
            sql += f" AND category = '{category}'"

        cursor.execute(sql)
        count = cursor.fetchone()[0]
        print(sql)
        end_time = time.time()
        execution_time = round((end_time - start_time) * 1000, 2)

        return jsonify({
            'products_count': count,
            'query': query,
            'category': category,
            'execution_time': execution_time
        })
    
    except Exception as e:
        conn.close()
        return jsonify({
            'error': "An error occurred while processing your request.",
        }), 500
    

@app.route('/api/products', methods=['GET'])
def products():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM products')
    product_rows = cursor.fetchall()
    conn.close()

    products = []

    for row in product_rows:
        products.append({
            'id': row[0],
            'name': row[1],
            'category': row[2],
            'price': row[3],
            'stock': row[4],
        })

    return jsonify({'products': products})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username', '')
    password = data.get('password', '')

    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password))

    user = cursor.fetchone()
    conn.close()
    print(user)
    if user:
        if user[4] == 1:
            return jsonify({
                'success': True,
                'user': {
                    'id': user[0],
                    'username': user[1],
                    'isAdmin': bool(user[4]),
                    'flag': os.getenv('FLAG')
                }
            })
        else:
            return jsonify({
                'success': True,
                'user': {
                    'id': user[0],
                    'username': user[1],
                    'isAdmin': bool(user[4]),
                }
            })
    
    else:
        return jsonify({
            'success': False,
            'message': 'Invalid username or password'
        }), 401
    
if __name__ == '__main__':
    localhost = os.getenv('LOCALHOST')
    app.run(debug=True ,port=5000)