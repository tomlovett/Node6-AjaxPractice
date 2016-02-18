var app = require('express')()
var bodyParser = require('body-parser')
var logger = require('morgan')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

var submissions = [
	{
		name  : 'David',
		url   : 'https://www.youtube.com/watch?v=2s4slliAtQU',
		title : 'Surfin\' USA',
		desc  : 'The Beach Boys\' song "Surfin\' USA"'
	},
	{
		name  : 'Noah',
		url   : 'https://www.youtube.com/watch?v=KnPL5OXSBNE',
		title : 'I Get Around',
		desc  : 'The Beach Boys\' hit "I Get Around"'
	},
	{
		name  : 'Brian',
		url   : 'https://www.youtube.com/watch?v=AOMyS78o5YI',
		title : 'God Only Knows',
		desc  : 'The Beach Boys\' hit song "God Only Knows"'
	}
]



// Server-side
index.html

viewentries.html
	// write contests to page
	// voting by POST
winner.html
	// hooray for this guy!!
	// write to page
	// redirect to viewentries?

entries.json
	// interactive functions written in app.js
		// getLength()
		// remove(submission): pull, parse, remove, return
		// add : (pull, parse) add (, return)
styles.css
