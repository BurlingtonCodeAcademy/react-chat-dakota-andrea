//import & setup express
const express = require("express");
const app = express();
const path = require("path");
require ('dotenv').config()
const port = process.env.PORT || 8000;

// const chatFunctions = require("./chatFunctions");
// const bodyParser = require("body-parser");
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

//middleware

app.use(express.static(path.resolve(staticDir)));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// //route to endpoint based on function used
// app.get("/users/all", chatFunctions.getAllUsers);
// app.get("/users/:id", chatFunctions.getOneUser);
// app.post("/users", chatFunctions.insertUser);
// app.patch("users/:id", chatFunctions.updateUser);
// app.delete("/users/:id", chatFunctions.deleteUser);

//listen check
app.listen(port,()=> console.log(`listening on port ${port}`))