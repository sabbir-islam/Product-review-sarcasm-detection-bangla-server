const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { text } = req.body;

    const response = await axios.post(
      "http://127.0.0.1:8000/predict",
      { text }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Prediction failed" });
  }
});

module.exports = router;
