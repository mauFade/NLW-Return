import express from "express";
import router from "./router";
import cors from "cors";

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.info(`API server running on port ${PORT}`);
});
