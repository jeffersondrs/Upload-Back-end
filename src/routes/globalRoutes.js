const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("./../config/multer");
const userModel = require("./../models/userModel");

// router.route("/create").post(userController.createUser);
router.get('/posts', async (req, res) => {
    const posts = await userModel.find();
    return res.json(posts);
})

router.delete('/posts/:id', async (req, res) => {
    const posts = await userModel.findById(req.params.id);
    await posts.remove();
    return res.send()
})

router.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
    const { originalname: name, size, key, location: url = "" } = req.file;

  const post = await userModel.create({
    name,
    size,
    key,
    url,
  })

  return res.json(userModel);
});

module.exports = router;