import express from "express";
import cors from "cors";

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(cors());

const users = [
  {
    email: "abc@gmail.com",
    password: "passsword",
  },
];

const existingUser = (email) => users.find((user) => user.email === email);

app.get("/", (req, res) => {
  res.send("Hello World updated!");
});

app.get("/vijay", (req, res) => {
  res.send("Hello Vijay!");
});

app.post("/vijay", (req, res) => {
  res.status(300).json({
    message: "Hello Vijay! This is a POST request.",
  });
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  const existedUser = existingUser(email);

  if (existedUser) {
    return res.status(200).json({
      message: "User already exists!",
    });
  }

  users.push({
    email,
    password,
  });

  res.status(201).json({
    message: "User created successfully!",
    users,
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required!",
    });
  }

  const existedUser = existingUser(email);

  if (!existedUser) {
    return res.status(404).json({
      message: "User does not exist!",
    });
  }

  if (existedUser.password !== password) {
    return res.status(401).json({
      message: "Incorrect password!",
    });
  }

  res.status(200).json({
    message: "User logged in successfully!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
