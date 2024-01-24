const express = require('express');
const router = express.Router();
const getProducts = require("../controllers/productsController"); // Correct import

router.get('/products', (req, res) => {
    res.send('Products Page');
});

router.get('/list', getProducts); // Use getProducts directly

module.exports = router;




   // const getProducts = () => {
    //     fetch('/api/list')
    //         .then(response => response.json())
    //         .then(response => res.status(200).json(response.data))
    //         .catch(error => res.status(500).json({errror: error.message}))
    // }