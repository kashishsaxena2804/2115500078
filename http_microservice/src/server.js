const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/categories', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
