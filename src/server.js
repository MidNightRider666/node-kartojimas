const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const ProductRoutes = require('./routes/ProductRoutes')

// const mysql = require('mysql2/promise');
// const dbConfig = require('./dbConfig');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

// middleware
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

app.use('/', ProductRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
