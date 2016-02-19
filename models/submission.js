var _ = require('underscore')

var allSubs = []
var id = 0

var allContests = []

var Submission = function(vidDeets) {
	this.name  = vidDeets.name
	this.url   = vidDeets.url
	this.title = vidDeets.title
	this.desc  = vidDeets.desc
	this.id    = id
	id += 1
	allSubs.push(this)
}

var Contest = function(submissionOne, submissionTwo) {
	this.subOne   = submissionOne
	this.subTwo   = submissionTwo || null
	this.votesOne = 0
	this.votesTwo = 0
}

Contest.prototype = {
	loser : function() {
		if (!this.subTwo) return null
		if (this.votesOne > this.votesTwo) {
			return this.subTwo 
		} else {
			return this.subOne
		}
	}
}

var genContests = function() {
	for (var i = 0; i < allSubs.length; i += 2) {
		allContests.push(new Contest(allSubs[i], allSubs[i+1]))
	}
	if (allSubs.length % 2 == 1) {
		allContests.push(new Contest(_.last(allSubs)))
	}
}

var removeVid = function(video) {
	var index = _.findWhere(allSubs, {id : video.id})
	allSubs.splice(index, 1)
}


new Submission({
	name  : 'David',
	url   : 'http://www.youtube.com/embed/2s4slliAtQU',
	title : 'Surfin\' USA',
	desc  : 'The Beach Boys\' song "Surfin\' USA"'
	})
new Submission({
	name  : 'Noah',
	url   : 'http://www.youtube.com/embed/KnPL5OXSBNE',
	title : 'I Get Around',
	desc  : 'The Beach Boys\' hit "I Get Around"'
})
new Submission({
	name  : 'Brian',
	url   : 'http://www.youtube.com/embed/AOMyS78o5YI',
	title : 'God Only Knows',
	desc  : 'The Beach Boys\' hit song "God Only Knows"'
})

module.exports = {
	allSubs    : allSubs,
	allContests: allContests,
	Submission : Submission,
	Contest    : Contest,
	removeVid  : removeVid
}