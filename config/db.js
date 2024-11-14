// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://ighaloemmanuel3:Mathematics101@cluster0.gnq32.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB is Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);  // Exit the process with a failure status
  }
};

module.exports = connectDB;
