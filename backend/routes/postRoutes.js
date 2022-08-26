const express = require("express");
const router = express.Router();
const {
  getPlaylists,
  newPosts,
  updatePosts,
  deletePost,
} = require("../controllers/postController");

router.route("/").get(getPlaylists);

module.exports = router;
