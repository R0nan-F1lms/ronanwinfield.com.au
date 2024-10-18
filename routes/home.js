// routes/portfolio.js

const express = require('express');
const router = express.Router();

// Home route to render the homepage
router.get('/', (req, res) => {
    res.render('index');  // This should render your home page view (index.ejs)
});

// Comment out or remove portfolio route until you're ready to use it
/*
router.get('/portfolio', async (req, res) => {
    try {
        const items = await PortfolioItem.find({});

        // Group items by category
        const categories = {};
        items.forEach(item => {
            if (!categories[item.category]) {
                categories[item.category] = [];
            }
            categories[item.category].push(item);
        });

        res.render('portfolio', { categories });
    } catch (err) {
        console.error('Error fetching portfolio items:', err);
        res.status(500).send('Internal Server Error');
    }
});
*/

module.exports = router;
