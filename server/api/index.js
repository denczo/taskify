const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');
const app = express();
const fs = require('fs');

// Use json-server router
const router = jsonServer.router('./db.json');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Function to read JSON file synchronously
const readJSONFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return null;
  }
};

// Define endpoint for copying data from newData.json to db.json
app.get("/reset", (req, res) => {
  try {
    const newData = readJSONFile("./data/db_original.json"); // Read new data from newData.json
    if (newData) {
      router.db.setState(newData); // Set db.json to be a copy of newData
      res.status(200).json({ message: "Data copied successfully" });
    } else {
      res.status(500).json({ error: "Failed to read new data file" });
    }
  } catch (error) {
    console.error("Error copying data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// app.get("/", (req, res) => res.send("Express on Vercel"));

// // Serve JSON Server router under a specific route prefix
app.use('/', router);

// // Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`JSON Express Server is running on port ${PORT}`);
});

// Export the Express app as a serverless function
module.exports = app;