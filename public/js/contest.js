angular.module('contest', [])

angular.module('contest').controller('contestHandler', ['$scope', '$sce', 'contestFactory', function($scope, $sce, contestFactory) {

	$scope.verifyVid = $sce.trustAsResourceUrl

	var refresh = function() {
			contestFactory.getVideos().then(function(returnData) {
				$scope.submissions = returnData.data
		})
	}

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

	refresh()

}])