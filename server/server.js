import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// Express lets our server read incoming JSON requests and parse them into JS objects.
// CORS is for allowing
// .env is a file you can put private keys in while including it in the .gitignore

app.get("/", function (request, response) {
  response.json({
    message: `"Radical simply means grasping things at the root." - Angela Davis`,
  });
});
app.listen(8080, function () {
  console.log(`On port eight thousand and eighty.`);
});

// GET is for getting information from the server
// POST is when you need to post something to the server
// PUT is when you need to replace an item
// PATCH is when you need to modify an item without changing the whole thing with PUT
// DELETE is the most sensibly named of these
