const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

// Import routes
const studentRoutes = require("./routes/studentRoutes");

// Import middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

// Built-in middleware
app.use(express.json());

// Third-party middleware
app.use(cors());
app.use(morgan("dev"));

// Custom application-level middleware
app.use(logger);

// Main route
app.get("/", (req, res) => {
    res.send("Student Management API is running");
});

// Student routes
app.use("/api/students", studentRoutes);

// 404 middleware
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Centralized error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});