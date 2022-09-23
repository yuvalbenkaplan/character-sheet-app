const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
//const postsController = require("../controllers/posts");
const selectController = require("../controllers/select");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, selectController.getProfile);

router.post("/createPost", upload.single("file"), selectController.createPost);

router.put("/likePost/:id", selectController.likePost);

router.delete("/deletePost/:id", selectController.deletePost);

module.exports = router;
