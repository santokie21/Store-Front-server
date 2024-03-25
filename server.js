const express = require("express");
const dotenv = require("dotenv");
const clotheRouter = require("./routes/clotheRouter");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || "/api/clothes";

app.use(express.json());
app.use(BASE_URL, clotheRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
