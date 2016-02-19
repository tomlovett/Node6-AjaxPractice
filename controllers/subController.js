var subModel = require('../models/submission.js')

var getVideos = function(req, res) {
	res.send(subModel.allSubs)
}

var newSubmission = function(req, res) {
	new subModel.Submission(req.body)
	res.send(subModel.allSubs)
}

var removeVid = function(req, res) {
	subModel.removeVid(req.body)
}

var nextRound = function(req, res) {
	res.send(subModel.genContests())
}

module.exports = {
	getVideos     : getVideos,
	newSubmission : newSubmission,
	removeVid     : removeVid,
	nextRound 	  : nextRound
}