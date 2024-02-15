const express = require("express");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGODB_UNAME}:${process.env.MONDODB_UPASS}@cluster0.ovriozy.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const arthalaDatabase = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db1 = arthalaDatabase.db("arthalapdb").collection("blogs");
const db2 = arthalaDatabase.db("usersDB").collection("users");
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await arthalaDatabase.connect();
    // Send a ping to confirm a successful connection
    await arthalaDatabase.db("userDb").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    arthalaDatabase.close();
  }
}
// run().catch(console.dir);

// handler functions
const addPost = async function (req, res) {
  await arthalaDatabase.connect();
  db1.insertOne({ name: "taher" });
  res.json("blog posted");
};
const blogs = async function (req, res) {
  // console.log(data);
  await arthalaDatabase.connect();
  const data = await db2.find().toArray();
  res.send(data);
};

module.exports = { addPost, blogs };
