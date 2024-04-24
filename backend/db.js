const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"

const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI);
        console.log("SuccessFully Connected!...")
}
module.exports = connectToMongo;
