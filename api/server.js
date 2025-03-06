import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api", async (req, res) => {
  console.log(req);
  res.send("ok");
});

export default app;
