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

<<<<<<< HEAD
	$scope.pageClass = 'page-amuse';
})

.controller('AmjalController', function($scope) {
	
=======
})

.controller('AmuseController', function($scope, $mdSidenav) {
	$scope.openRightMenu = function() {
	    $mdSidenav('right').toggle();
	    console.log($scope.openRightMenu);
	  };
>>>>>>> 410eff62da15e693cef3d8563509c5be5e6cfbed
})