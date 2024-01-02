const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/api/data", async (req, res) => {
  try {
    // Call an external API using axios
    const externalApiUrl = "https://rickandmortyapi.com/api";
    const response = await axios.get(externalApiUrl);

    // Send the data to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/api/data/character", async (req, res) => {
  try {
    const pageNumber = req.query.page || 1;
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    res.set("Content-Type", "application/json");
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message || error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/api/data/location", async (req, res) => {
  try {
    // Call an external API using axios
    const externalApiUrl = "https://rickandmortyapi.com/api/location";
    const response = await axios.get(externalApiUrl);

    // Send the data to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/api/data/episode", async (req, res) => {
  try {
    // Call an external API using axios
    const externalApiUrl = "https://rickandmortyapi.com/api/episode";
    const response = await axios.get(externalApiUrl);

    // Send the data to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
