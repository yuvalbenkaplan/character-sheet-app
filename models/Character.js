const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  Strength: {
    type: Number,
    required: true,
  },
  Dexterity: {
    type: Number,
    required: true,
  },
  Constitution: {
    type: Number,
    required: true,
  },
  Intelligence: {
    type: Number,
    required: true,
  },
  Wisdom: {
    type: Number,
    required: true,
  },
  Charisma: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    required: true,
    default: 1,
  },
  health: {
    type: Number,
    required: true,
    default: 0,
  },
  experience: {
    type: Number,
    required: true,
    default: 0,
  },
  // image: {
  //   type: String,
  //   require: true,
  // },
  // cloudinaryId: {
  //   type: String,
  //   require: true,
  // },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Character", PostSchema);
