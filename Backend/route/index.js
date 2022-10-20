const express = require("express");
const router = express.Router();
const Userhelper = require("../controller/Userhelper");
const { response } = require("express");
const jwt = require("jsonwebtoken");
const middleware=require('../middleware/auth')

router.get("/getUsers", middleware.checkToken,async (req, res) => {
  Userhelper.allUsers().then((response) => {
    res.status(200).json(response);
  });
});


router.post("/login", async (req, res) => {
  Userhelper.doLogin(req.body).then(async (response) => {
    if (response.status == 400) {
    return  res.status(400).json({ message: response.message });
    }
    if (response.status == 200) {
     return res.status(200).json(response);
    }
  });
});

router.post("/signUp", async (req, res) => {
  Userhelper.dosignUp(req.body).then((response) => {
    console.log(response);
    res.json(response);
  });
});

module.exports = router;
