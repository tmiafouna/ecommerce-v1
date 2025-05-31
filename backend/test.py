import requests
import json

# Login
login_data = {
    'email': 'test@example.com',
    'password': 'test123'
}

login_response = requests.post('http://localhost:3001/api/auth/login', json=login_data)
print('Login response:', login_response.text)

if login_response.status_code == 200:
    token = login_response.json()['token']
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }

    # Get products
    products_response = requests.get('http://localhost:3001/api/products', headers=headers)
    print('Products response:', products_response.text)

    if products_response.status_code == 200:
        products = products_response.json()
        if len(products) > 1:
            product_id = products[1]['_id']
            print('Deleting product with ID:', product_id)
            
            # Delete product
            delete_response = requests.delete(f'http://localhost:3001/api/products/{product_id}', headers=headers)
            print('Delete response:', delete_response.text)
        else:
            print('Not enough products found')
    else:
        print('Failed to get products:', products_response.status_code)
else:
    print('Login failed:', login_response.status_code)
