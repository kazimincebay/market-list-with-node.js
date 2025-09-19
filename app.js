const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
const app = express();

app.use(cors());
dotenv.config();

const PORT = process.env.PORT;
const { initDB } = require("./db");
const itemsRouter = require("./routes/items");

app.use(express.json());
app.use("/items", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
