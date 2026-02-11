import express from "express";
import router from "./router";

let app = express();
let PORT_NUM = 9999;

// Use router for api routes
app.use("/api", router);

// Initialize server
app.listen(PORT_NUM, () => {
  console.log("Server running on port " + PORT_NUM);
});
