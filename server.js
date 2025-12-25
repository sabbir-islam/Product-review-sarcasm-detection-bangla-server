const express = require("express");
const cors = require("cors");

const sarcasmRoute = require("./routes/sarcasm");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sarcasm", sarcasmRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Node server running on port ${PORT}`);
});
