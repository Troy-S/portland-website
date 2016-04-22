angular.module('portlandApp.controllers', [])

.controller('HomeController', function($scope) {
	
})

.controller('WorkController', function($scope) {

})

.controller('AmuseController', function($scope, $mdSidenav) {
	$scope.openRightMenu = function() {
	    $mdSidenav('right').toggle();
	    console.log($scope.openRightMenu);
	  };
})