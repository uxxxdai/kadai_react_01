// app.js

import express from "express";
// 🔽 追加 じゃんけんのルーティングを読み込む
import { jankenRouter } from "./routes/datetime.route.js";

const app = express();
// 🔽 追加 POSTでデータを受け取るために必要
app.use(express.urlencoded({ extended: true }));
// 🔽 追加 JSONデータを使用するために必要
app.use(express.json());

const port = 3001;

app.get("/", (req, res) => {
  res.json({
    uri: "/",
    message: "Hello Node.js!",
  });
});

app.use("/datetime", (req, res) => jankenRouter(req, res));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});