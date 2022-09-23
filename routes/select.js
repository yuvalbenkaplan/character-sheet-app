const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const selectController = require("../controllers/select");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Select Routes - simplified for now
router.get("/:id", ensureAuth, selectController.getProfile);

//router.post("/createPost", upload.single("file"), selectController.createPost);

module.exports = router;
