const mongoose = require("mongoose");
const config = require("config");
const dbURI = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB Atlas...");
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit process on Fatal Exception
  }
};

module.exports = connectDB;
