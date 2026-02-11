import { Router } from "express";
import bodyParser from "body-parser";

// initialize router
let router = Router();

// json object with sample data to return to user
let my_data = [
  { name: "apple", color: "red", price: 1.5 },
  { name: "orange", color: "peach", price: 0.85 },
  { name: "banana", color: "yellow", price: 2.5 },
];

// create items route
router.get("/items", (request, response) => {
  response.json(my_data);
});

// create first_few items route
router.get("/first_few", (request, response) => {
  let count = parseFloat(request.query.count);

  // slice the data to get only first_few items
  let first_few = my_data.slice(0, count);

  response.json(first_few);
});

// create upload route
router.post("/upload", (request, response) => {
  let contents = request.body;
  console.log("Received a response with: " + JSON.stringify(contents));

  if (contents.name !== undefined && contents.price !== undefined) {
    my_data.push(contents);
  }

  response.json("Upload successful!");
});

export default router;
