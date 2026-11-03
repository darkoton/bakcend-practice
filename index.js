
const express = require('express');

const app = express();

// Hardcoded in-memory products array
const products = [
    { id: 1, name: 'Product 1', brand: 'Brand A' },
    { id: 2, name: 'Product 2', brand: 'Brand B' },
    { id: 3, name: 'Product 3', brand: 'Brand A' }
];

// Middleware for all routes
app.use((request, response, next) => {
    console.log(request.method, request.url);
    next();
});

// GET request on root path
app.get('/', (request, response) => {
    response.send('response for GET request');
});

// Route with parameter to get products by brand
app.get('/products/:brand', (req, res) => {
    const { brand } = req.params;

    // Filter products by brand
    const filteredProducts = products.filter(
        product => product.brand === brand
    );

    // Send filtered products as JSON
    res.json(filteredProducts);
});

// Start the server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});
