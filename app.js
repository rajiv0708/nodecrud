import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connnectDB from "./database/connectdb.js";
import web from "./routes/web.js";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const port = process.env.PORT || "8000";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// connection to database

connnectDB();

app.use(express.urlencoded({ extended: false }));

// Set Template Engine
app.set("view engine", "ejs");
app.use("/css", express.static(__dirname + "/node_modules/font-awesome/css"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

// Load root
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/employee", web);

app.listen(port, () => {
  console.log(`Server started at port: http://localhost:${port}`);
});
