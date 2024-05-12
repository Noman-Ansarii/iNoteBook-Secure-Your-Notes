const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
// const DB_NAME = require('./constant');


const connectToMongo = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\n MongoDB Connected!. DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection Error!.", error);
        process.exit(1);
    }
};

module.exports = connectToMongo;
