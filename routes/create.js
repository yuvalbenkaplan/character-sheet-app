const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const createController = require("../controllers/create");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.get("/", ensureAuth, createController.getCreate);

//router.get("/:id", ensureAuth, createController.getCreate);


router.post("/createCharacter", upload.single("file"), createController.createCharacter);

//router.delete("/deletePost/:id", createController.deleteCharacter);

module.exports = router;
