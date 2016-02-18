var Submission = function(name, url, title, desc) {
	this.name  = name
	this.url   = url
	this.title = title
	this.desc  = desc
}

var Contest = function(submissionOne, submissionTwo) {
	this.subOne   = submissionOne
	this.subTwo   = submissionTwo
	this.votesOne = 0
	this.votesTwo = 0
}

Contest.prototype = {
	loser : function() {
		if (this.votesOne > this.votesTwo) {
			return this.subTwo
		} else {
			return this.subOne
		}
	}
}

module.exports = {
	submission : Submission,
	contest    : Contest
}