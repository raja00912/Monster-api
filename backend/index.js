const express = require('express');
const path = require('path')
const connectDB = require('./config/db');
const imagesRoute = require('./routes/imagesRouter');
const cors = require('cors');

require('./config/env')

const app = express();
app.use(cors());

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/images', imagesRoute)

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})