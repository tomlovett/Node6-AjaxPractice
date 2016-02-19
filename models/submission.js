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
	this.subOne = submissionOne
	this.subTwo = submissionTwo || null
	this.votes  = { 1: 0, 2: 0 }
}

var genContests = function() {
	allContests = []
	for (var i = 0; i < allSubs.length; i += 2) {
		allContests.push(new Contest(allSubs[i], allSubs[i+1]))
	}
	return allContests
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
	genContests: genContests,
	Submission : Submission,
	Contest    : Contest,
	removeVid  : removeVid
}