angular.module('contest', [])

angular.module('contest').controller('contestHandler', ['$scope', '$http', '$sce', 'contestFactory', function($scope, $http, $sce, contestFactory) {

	$scope.verifyVid = $sce.trustAsResourceUrl

	contestFactory.getVideos().then(function(returnData) {
		$scope.submissions = returnData.data
	})

	$scope.newSubmission = function(videoDeets) {
		if ($scope.submissions.length > 7) {
			$scope.tooMany = true
			return
		}
		$scope.tooMany = false
		contestFactory.newSubmission(videoDeets)
	}

}])