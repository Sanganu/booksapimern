const router = require("express").Router();
const youTubeController = require("../controllers/axiosController")
// const YouTube = require('youtube-node');
// const youTube = new YouTube();
// const db = require("../models/ReferenceVideos")
// const youTubeSearch = require("youtube-search");


//Reference Videos Login - API to get Channel Videos and serve front end????????
router.route("/videos/:str")
      .get(youTubeController.findAll)
module.exports = router;