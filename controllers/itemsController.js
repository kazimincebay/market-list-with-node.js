const { db } = require("../db");

async function getItems(req, res) {
  await db.read();
  res.json(db.data.items);
}

async function addItem(req, res) {
  const { name, quantity } = req.body;

  if (!name || !quantity) {
    return res.status(400).json({ message: "Name and Quantity is required" });
  }

  await db.read();

  const newItem = {
    id: db.data.items.length + 1,
    name,
    quantity,
  };
  db.data.items.push(newItem);
  await db.write();
  res.status(201).json(newItem);
}

async function updateItem(req, res) {
  const id = parseInt(req.params.id);
  const { name, quantity } = req.body;

  await db.read();
  const item = db.data.items.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({ message: "ID is not found" });
  }

  if (name) item.name = name;
  if (quantity) item.quantity = quantity;
  await db.write();
  res.json(item);
}

async function deleteItem(req, res) {
  const id = parseInt(req.params.id);

  await db.read();
  const index = db.data.items.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "ID is not found" });
  }

  const deletedItem = db.data.items.splice(index, 1);
  await db.write();
  res.json(deletedItem[0]);
}

module.exports = { getItems, addItem, updateItem, deleteItem };
