import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

// Mock user database
const user = [
    {
        id: 1,
        username: "mor_2314",
        password: "$2b$10$6l8z5Z1U9Q3zXqzR0zV7UuZ2jP9KzjZwZ2p5e5nWQzrZ6ZzZ6ZzZ6",
    },
];

// Secret key
const secretKey = process.env.SECRET_KEY || "";

// Login route
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const users = users.find((user) => user.username === username);

    if (!user || !bcrypt(password, user.password)) {
        return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });

    res.json({ token });
});

// secured route
router.get("/products", (req, res) => {
    res.send("Welcome!");
});

export default router;