// In your Express backend (index.ts)
import express from "express";
import cors from "cors";

const app = express();
const port = 3001;
app.use(cors());
app.get("/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
