angular.module('portlandApp.controllers', [])

.controller('HomeController', function($scope) {
	$scope.pageClass = 'page-home';
})

.controller('WorkController', function($scope) {
	$scope.pageClass = 'page-work';
})

.controller('AmuseController', function($scope, $mdSidenav) {
	$scope.openRightMenu = function() {
		$mdSidenav('right').toggle();
		console.log($scope.openRightMenu);
	}

	$scope.pageClass = 'page-amuse';
})

.controller('AmjalController', function($scope) {

})

.controller('AmuseController', function($scope, $mdSidenav) {
	$scope.openRightMenu = function() {
	    $mdSidenav('right').toggle();
	    console.log($scope.openRightMenu);
	  };
})