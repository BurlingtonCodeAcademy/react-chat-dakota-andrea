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

const getAllUsers = async (request, response) => {
  let response = await myDataBase.getAll();
  console.log(response);
  if (response.status === "ok") {
    response.status(200).send(response.data);
  } else {
    response.status(400).send(response.error);
  }
};

const insertUser = async (request, response) => {
  let user = request.body.user;
  let newUser = {
    username: user.username;
  };
  let response = await myDataBase.insert(newUser);
  console.log(response);
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

const getOneUser = async (request, response) => {
  let id = request.params.id;
  let response = await myDataBase.getOne(id);
  console.log(response);
  if (response.status === "ok") {
    response.status(200).send(response.data);
  } else {
    response.status(400).send(response.error);
  }
};

const updateUser = async (request, response) => {
  let id = request.params.id;
  let updateObject = request.body.updateObject;
  let response = await myDataBase.update(id, updateObject);
  console.log(response);
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

const deleteUser = async (request, response) => {
  let id = request.params.id;
  let response = await myDataBase.delete(id);
  console.log(response);
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