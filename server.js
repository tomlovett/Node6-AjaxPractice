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

app.get('/api/videos', subCtrl.getVideos)
app.post('/api/videos', subCtrl.newSubmission)

var port = 3000
app.listen(port, function() {
	console.log('Server running on port ' + port)
})