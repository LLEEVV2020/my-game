// server/index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

let base = { x: 200, y: 200, width: 50, height: 50 };
let barracks = [
  { x: 50, y: 400, width: 50, height: 50 },
  { x: 150, y: 400, width: 50, height: 50 },
  { x: 250, y: 400, width: 50, height: 50 },
  { x: 350, y: 400, width: 50, height: 50 },
  { x: 450, y: 400, width: 50, height: 50 },
];

app.get("/data", (req, res) => {
  res.json({ base, barracks });
});

app.post("/data", (req, res) => {
  const { base: newBase, barracks: newBarracks } = req.body;
  base = newBase;
  barracks = newBarracks;
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
