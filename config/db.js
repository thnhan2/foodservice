const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database', error.message);
        throw error;
    }
}

module.exports = {connectToDatabase};