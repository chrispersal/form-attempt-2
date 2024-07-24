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

app.listen(8080, function () {
  console.log(`Mods, crush his skull.`);
});
