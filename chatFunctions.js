const DataStore = require("./datastore.js");
const url =
  "mongodb+srv://dfaye:passwordAVDF@cluster0.arzvc.mongodb.net/<dbname>?retryWrites=true&w=majority";

let myDataBase = new DataStore(url, "users", "usernames");

let chatRoomOne = new DataStore(url, "chat-rooms", "room-one");

let chatRoomTwo = new DataStore(url, "chat-rooms", "room-two");
//Username Schema:
//{ username: String,
//  message: String,
//  time: Date,
//}

//get all users from database
const getAllUsers = async (request, response) => {
  let dbResponse = await myDataBase.getAll();
  console.log(dbResponse);
  if (response.status === "ok") {
    response.status(200).send(response.data);
  } else {
    response.status(400).send(response.error);
  }
};
//insert a new user into database
const insertUser = async (request, response) => {
  let user = request.body.user;
  let newUser = {
    username: user.username,
  };
  let dbResponse = await myDataBase.insert(newUser);
  console.log(dbResponse);
  if (response.status === "ok") {
    let users = await myDataBase.getAll();
    if (users.status === "ok") {
      response.status(200).send(users.data);
    } else {
      response.status(400).send(users.error);
    }
  } else {
    response.status(400).send(users.error);
  }
};
//show one user from database
const getOneUser = async (request, response) => {
  let id = request.params.id;
  let dbResponse = await myDataBase.getOne(id);
  console.log(dbResponse);
  if (response.status === "ok") {
    response.status(200).send(response.data);
  } else {
    response.status(400).send(response.error);
  }
};
//update a user
const updateUser = async (request, response) => {
  let id = request.params.id;
  let updateObject = request.body.updateObject;
  let dbResponse = await myDataBase.update(id, updateObject);
  console.log(dbResponse);
  if (response.status === "ok") {
    let users = await myDataBase.getAll();
    if (users.status === "ok") {
      response.status(200).send(users.data);
    } else {
      response.status(400).send(users.error);
    }
  } else {
    response.status(400).send(users.error);
  }
};
//delete a user
const deleteUser = async (request, response) => {
  let id = request.params.id;
  let dbResponse = await myDataBase.delete(id);
  console.log(dbResponse);
  if (response.status === "ok") {
    let users = await myDataBase.getAll();
    if (users.status === "ok") {
      response.status(200).send(users.data);
    } else {
      response.status(400).send(users.error);
    }
  } else {
    response.status(400).send(users.error);
  }
};

module.exports = {
  getAllUsers: getAllUsers,
  insertUser: insertUser,
  getOneUser: getOneUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
