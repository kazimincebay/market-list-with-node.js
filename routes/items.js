const express = require("express");
const router = express.Router();
const {
  getItems,
  addItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemsController");

router.get("/", getItems);
router.post("/additem", addItem);
router.put("/updateitem/:id", updateItem);
router.delete("/deleteitem/:id", deleteItem);

module.exports = router;
