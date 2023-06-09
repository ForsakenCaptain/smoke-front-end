import React from 'react';

const products = [
    { id: 1, name: 'Product 1', price: 9.99 },
    { id: 2, name: 'Product 2', price: 14.99 },
    { id: 3, name: 'Product 3', price: 19.99 },
];

const App = () => {
    return (
        <div>
            <h1>Welcome to the Webstore!</h1>
            <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;