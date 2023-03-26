import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: 50 }));

app.get("/", async (req, res) => {
  res.send("Hi, I am Hotel Saas Aro.");
});

app.listen(8080, () => {
  console.log("The server is started on http://localhost:8080");
});
