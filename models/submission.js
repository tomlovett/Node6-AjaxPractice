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

var shuffleVids = function() {  // copied from StackOverflow (thumbs up!)
	var j, x, i;
	for (i = allSubs.length; i; i -= 1) {
		j = Math.floor(Math.random() * i);
		x = allSubs[i-1];
		allSubs[i-1] = allSubs[j];
		allSubs[j] = x;
	}
}

// allowing users to shuffle the back-end data is a bad idea. I would rather put this in contestFactory.js but I'm more curious to see that I can do this.

var removeVid = function(video) {
	var index = allSubs.indexOf(video)
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
	Submission : Submission,
	Contest    : Contest,
	shuffleVids: shuffleVids,
	removeVid  : removeVid
}