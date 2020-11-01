require("dotenv").config();
const express = require("express");
const path = require("path");

const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

app.use(express.static(staticDir));

// const connection = mongoose.connection;
// connection.once('open', ()=>{
//   console.log(`Server is runnong on port: ${port}`)
// })



app.listen(port, () => {
  console.log('listening on port: ' + port) 
})