angular.module('contest', [])

angular.module('contest').controller('contestHandler', ['$scope', '$sce', 'contestFactory', function($scope, $sce, contestFactory) {

	$scope.verifyVid = $sce.trustAsResourceUrl  // workaround for html error with loading videos

	var refresh = function() {
			contestFactory.getVideos().then(function(returnData) {
				$scope.submissions = returnData.data
		})
	}

	// handle contests in the browser window
		// load all, divide into contests
		// send up delete requests to database

	$scope.newSubmission = function(videoDeets) {
		if ($scope.submissions.length > 7) {
			$scope.tooMany = true
			return
		}
		$scope.tooMany = false
		contestFactory.newSubmission(videoDeets)
		$scope.newVideo = {}
		refresh()
	}

	$scope.shuffleVids = function() {
		contestFactory.shuffleVids()
		refresh()
	}

	$scope.deleteVid = function(video) {
		contestFactory.deleteVideo(video)
		refresh()
	}

	refresh()

}])