const mongoose = require("mongoose");
const express = require("express");
// npm i cors
const cors = require("cors");
const app = express();
mongoose.set("strictQuery", true);
mongoose.connect(
    "mongodb+srv://sriram:sai@cluster0.zlzti3b.mongodb.net/sriram"
);
const db = mongoose.connection;
db.on("open", () => {
  console.log("Database Connected");
  
});
db.on("error", () => {
  console.log("Error in connecting to database");
});

app.use(express.json());
app.use(cors());

const port = 5500;
app.listen(port, () => {
  console.log("Sever Started on " + port);
});
