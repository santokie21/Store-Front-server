const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const clotheRouter = require("./routes/clotheRouter");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
  methods: "GET, POST, PUT, DELETE",
};

const app = express();
dotenv.config();
connectDb();

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || "/api/clothes";

app.use(express.json());
app.use(cors(corsOptions));
app.use(errorHandler);
app.use(BASE_URL, clotheRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
