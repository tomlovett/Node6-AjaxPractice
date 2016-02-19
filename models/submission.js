var allSubs = []

var Submission = function(vidDeets) {
	this.name  = vidDeets.name
	this.url   = vidDeets.url
	this.title = vidDeets.title
	this.desc  = vidDeets.desc
	allSubs.push(this)
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

console.log(allSubs)

module.exports = {
	allSubs    : allSubs,
	Submission : Submission,
	Contest    : Contest
}