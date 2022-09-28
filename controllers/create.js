const cloudinary = require("../middleware/cloudinary");
const Character = require("../models/Character");

module.exports = {
    getCreate: (req, res) => {
        res.render("create.ejs");
      },
  getProfile: async (req, res) => {
    try {
      const characters = await Character.find({ user: req.user.id });
      res.render("create.ejs", { characters: characters, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createCharacter: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      });
      console.log("Character has been added!");
      res.redirect("/select");
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
