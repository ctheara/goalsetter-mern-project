const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    // TODO: Add better error handling
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
