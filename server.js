//import & setup express
require("dotenv").config();
const chatFunctions = require("./chatFunctions");
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();
const bodyParser = require("body-parser");
const staticDir = process.env.DEV ? "./client/public" : "./client/build";
//middleware
app.use(express.static(path.resolve(staticDir)));
console.log(staticDir)
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// //route to endpoint based on function used
// app.get("/users/all", chatFunctions.getAllUsers);
// app.get("/users/:id", chatFunctions.getOneUser);
// app.post("/users", chatFunctions.insertUser);
// app.patch("users/:id", chatFunctions.updateUser);
// app.delete("/users/:id", chatFunctions.deleteUser);

//listen check
app.listen(port, () => {
  console.log("listening on port: " + port);
});
