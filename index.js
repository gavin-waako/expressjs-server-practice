import express from "express";

let app = express();
let PORT_NUM = 9999;

app.listen(PORT_NUM, () => {
  console.log("Server running on port " + PORT_NUM);
});
