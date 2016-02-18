angular.module('contest', [])

angular.module('contest').controller('contestHandler', ['$scope', '$http', '$sce', 'vidFactory', function($scope, $http, $sce, vidFactory) {

	// $http.get()

	console.log(vidFactory)

	$scope.verifyVid = $sce.trustAsResourceUrl

	$scope.submissions = [
	{
		name  : 'David',
		url   : 'http://www.youtube.com/embed/2s4slliAtQU',
		title : 'Surfin\' USA',
		desc  : 'The Beach Boys\' song "Surfin\' USA"'
	},
	{
		name  : 'Noah',
		url   : 'http://www.youtube.com/embed/KnPL5OXSBNE',
		title : 'I Get Around',
		desc  : 'The Beach Boys\' hit "I Get Around"'
	},
	{
		name  : 'Brian',
		url   : 'http://www.youtube.com/embed/AOMyS78o5YI',
		title : 'God Only Knows',
		desc  : 'The Beach Boys\' hit song "God Only Knows"'
	}
]

	$scope.submitVideo = function() {
		if ($scope.submissions.length > 7) {
			$scope.tooMany = true
			return
		}
		$scope.tooMany = false

		
	}

}])

angular.module('contest').factory('vidFactory', function() {

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

	 return {
		submission : Submission,
		contest    : Contest
	}

})