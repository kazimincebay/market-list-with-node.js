const express = require("express");
const app = express();
const PORT = 3000;
const { initDB } = require("./db");
const itemsRouter = require("./routes/items");

app.use(express.json());
app.use("/items", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
