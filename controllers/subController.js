var subModel = require('../models/submission.js')

var getVideos = function(req, res) {
	res.send(subModel.allSubs)
}

var newSubmission = function(req, res) {
	new subModel.Submission(req.body)
	res.send(subModel.allSubs)
}

// var shuffleVids = function() {
// 	subModel.shuffleVids()
// }

var removeVid = function(req, res) {
	subModel.removeVid(req.body)
}

module.exports = {
	getVideos     : getVideos,
	newSubmission : newSubmission,
	// shuffleVids   : shuffleVids,  -- deprecated
	removeVid     : removeVid
}