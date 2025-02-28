const mongoose = require("mongoose");

// Replace with your MongoDB connection string
const mongoURI =
  "Your mongoDB URL"; // Change accordingly

async function checkMongoDBConnection() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  } finally {
    mongoose.connection.close();
  }
}

// Call the function
checkMongoDBConnection();
