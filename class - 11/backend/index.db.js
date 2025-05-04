import express from "express";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const app = express();

//middleware
app.use(express.json());

const uri =
  "mongodb+srv://vijayanandr2000:q6pAHZniWtndE8JJ@cluster0.jdrs8bl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

const PORT = 8080;

const exisitngUser = async (email) => {
  const user = await client
    .db("loginApp")
    .collection("users")
    .findOne({ email });
  return user;
};

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const existedUser = await exisitngUser(email);

  if (existedUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const newUser = await client.db("loginApp").collection("users").insertOne({
    email,
    password,
  });

  res.status(201).json({
    message: "User created successfully",
    user: newUser.insertedId,
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const existedUser = await exisitngUser(email);

  if (!existedUser) {
    res.status(404).json({
      message: "User not found",
    });
  }

  if (password !== existedUser.password) {
    res.status(401).json({
      message: "Invalid password",
    });
  }

  res.status(200).json({
    message: "User logged in successfully",
    user: existedUser,
  });
});

app.delete("/user/:id", async (req, res) => {
  const id = req.params.id;

  const objectId = new ObjectId(id);

  const deletedData = await client
    .db("loginApp")
    .collection("users")
    .deleteOne({
      _id: objectId,
    });

  if (deletedData.deletedCount === 0) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json({
    message: "User deleted successfully",
  });
});

app.put("/user", async (req, res) => {
  const id = req.query.id;
  const newPassword = req.body.newPassword;

  const response = await client
    .db("loginApp")
    .collection("users")
    .updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          password: newPassword,
        },
      }
    );

  if (response.matchedCount === 0) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json({
    message: "User updated successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  run().catch(console.dir);
});
