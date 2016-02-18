var app = require('express')()
var bodyParser = require('body-parser')
var logger = require('morgan')

var subCtrl = require('./controllers/subController.js')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
	res.sendFile('main.html', {root: __dirname + '/public/html'})
})

app.get('/api/fruits', subCtrl.getVideos)
app.post('/api/fruits', subCtrl.newSubmission)

var port = 3000
app.listen(port, function() {
	console.log('Server running on port ' + port)
})


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
