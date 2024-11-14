// server/index.js
const express = require("express");
const cors = require("cors");
const connectDB = require("../backend/config/db"); // Import the database connection function
const sellerRoutes = require("../backend/routes/sellerRoutes"); // Import seller routes
const upload = require("./middleware/multer.middleware");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON data

// Connect to the database
connectDB();

app.use("/uploads", express.static("upload")); // Serve uploaded files

app.use(upload); // Use multer middleware for file uploads)

// Routes
app.use("/api/sellers", sellerRoutes); // Register seller routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
