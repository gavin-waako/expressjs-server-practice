import { Router } from "express";

let router = Router();

let my_data = [
  { name: "apple", color: "red", price: 1.5 },
  { name: "orange", color: "peach", price: 0.85 },
  { name: "banana", color: "yellow", price: 2.5 },
];

router.get("/items", (request, response) => {
  response.json(my_data);
});

export default router;
