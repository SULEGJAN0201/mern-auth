const express = require("express");
const UserModel = require("./UserModel");
const router = express.Router();
const User = require("./UserModel");



router.post("/signup", (req, res) => {
    const { userName, password } = req.body;
    if (!userName || !password) {
        res.status(400).json({ message: "Please provide username and password" });
    }
    const userExists = await UserModel.findOne({ userName: userName });
    
});




module.exports = router;