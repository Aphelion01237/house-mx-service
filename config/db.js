const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
  try {
    await mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://easyHouse:easyHouse2019@test-maintenance-9tvze.mongodb.net/test?retryWrites=true&w=majority",
      {
        useCreateIndex: true,
        useNewUrlparser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;