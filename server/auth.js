const express = require("express");
const UserModel = require("./UserModel");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { userName, password } = req.body;
  console.log(req.body);
  if (!userName || !password) {
    return res
      .status(400)
      .json({ message: "Please provide username and password" });
  }
  const userExists = await UserModel.findOne({ userName: userName });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  if (!userExists) {
    const user = await new UserModel({ userName, password });
    await user.save();
    return res.status(201).json({ message: "User created successfully", user });
  }
});

module.exports = router;
