// const YouTube = require('youtube-node');
// const youTube = new YouTube();
const VideoSchema = require("../models/VideoList");
const ChannelSchema = require("../models/Channel");
const youTubeSearch = require("youtube-search");

module.exports = {
    findAll: function (req, res) {
        console.log("AXIOS Controller -  API - Search", req.params.str);
        let videos = [];
        let options = {
            maxResults: 9,
            key: process.env.API_YOUTUBE
        }
        youTubeSearch(req.params.str, options, function (err, results) {
            if (err) {
                console.log("Err in fetching Youtube data", err)
                res.json(err)
            }
            else {
               console.log("Youtube results", results);
                VideoSchema.find({}).select('youtubeId')
                    .then(savedVideos => {
                        console.log("Saved Video",savedVideos)
                        let newVideos = results.map(element => {
                            if (savedVideos.indexOf(element.id) === -1 ) {
                                return element
                            }

                        })
                        console.log("Update search result",newVideos)

                        res.json(newVideos)
                    })
            }
        })
    }
}