//setup
const { MongoClient, ObjectId } = require("mongodb");


//path to mongo DB
//const uri = "mongodb://localhost:27017";
//mongo connection constructor
//const client = new MongoClient(uri, { useUnifiedTopology: true });
class DataStore {
  constructor(dbUrl, dbName, dbCollection) {
    this.dbUrl = dbUrl;
    this.dbName = dbName;
    this.dbCollection = dbCollection;
    this.dbClient = null;
  }
  async client() {
    if (this.dbClient && this.dbClient.isConnected()) {
      return this.dbClient;
    } else {
      console.log(`Connecting to ${this.dbUrl}`);
      this.dbClient = await MongoClient.connect(this.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to database!");
      return this.dbClient
    }
  }

  async collection() {
    const client = await this.client();
    const database = client.db(this.dbName);
    const collection = database.collection(this.dbCollection);
    return collection;
  }

  async insert(object) {
    let response= { status: null, error: null };
    try {
      let collection = await this.collection();
      console.log("Inserting item...");
      await collection.insertOne(object);
      console.log("Item successfully added");
      response.status = "ok";
    } catch (error) {
      response.error = error.toString();
      console.log(error.toString());
    }
    return response;
  }

  async getAll() {
    let response = { status: null, error: null,data: null };
    let items = [];
    try {
      let collection = await this.collection();
      await collection.find({}).forEach((item) => items.push(item));
      response.status = "ok";
      response.data = items

    } catch(error) {
      response.error = error.toString();
      console.log(error.toString())
    } 
    return response
  }

  async getOne(id) {
    let response = { status: null, error: null,data: null };
    try {
      let collection = await this.collection();
      let item = await collection.findOne({ _id: ObjectId(id) });
      response.status = "ok";
      response.data = item;
    } catch (error) {
      response.error = error.toString();
      console.log(error.toString());
    }
    return response;
  }

  async update(id, updateObject) {
    let response = { status: null, error: null };
    try {
      let collection = await this.collection();
      await collection.updateOne({ _id: ObjectId(id) }, { $set: updateObject });
      console.log("Update Successful");
      response.status = "ok";
    } catch (error) {
      response.error = error.toString();
      console.log(error.toString());
    }
    return response;
  }

  async delete(id) {
    let response = { status: null, error: null };
    try {
      let collection = await this.collection();
      await collection.deleteOne({ _id: ObjectId(id) });
      console.log("Item successfully deleted!");
      response.status = "ok";
    } catch (error) {
      response.error = error.toString();
      console.log(error.toString());
    }
    return response;
  }
}

module.exports = DataStore
// async function run() {
//   //connect to mongo process
//   await client.connect();
//   //choosing database
//   const db = client.db("users");
//   //choosing a collection
//   const collection = db.collection("usernames");
//   //propmt to determine action
//   let action = await ask(
//     "What would you like to do(create user, show users, update user, delete user)? "
//   );
//   if (action === "create user") {
//     //create username
//     let username = await ask("Enter a username: ");
//     //insert username into collection
//     await collection.insertOne({
//       username: username,
//     });
//   } else if (action === "show users") {
//     let userArr = await collection.find({}).toArray();
//     console.log(userArr);
//   } else if (action === "delete user") {
//     //show all users
//     await collection.find({}).forEach((user) => {
//       console.log(user.username);
//     });
//     let target = await ask("Which user would you like to delete? ");
//     //parse ID from string to mongo ID object

//     //use ID to target object to delete
//     await collection.deleteOne({ username: target });
//   } else if (action === "update user") {
//     await collection.find({}).forEach((user) => {
//       console.log(user.username);
//     });
//     //choose which user to update
//     let target = await ask("Which username would you like to update? ");
//     let change = await ask("What is the new username? ");
//     //parse data

//     //create update to be applid (via mongodb $set method)
//     let update = { $set: { username: change } };
//     //perform the update
//     await collection.updateOne({ username: target }, update);
//   }
//   //close connection
//   client.close();
//   process.exit();
// }

// run();
