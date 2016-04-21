angular
	.module('portlandApp', ['ui.router', 'portlandApp.controllers', 'ngMaterial'])
	.config(MainRouter)

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "/templates/home.html",
			controller: "HomeController"
		})
		.state('work', {
			url: "/work",
			templateUrl: "/templates/work.html",
			controller: "WorkController"
		})

		$urlRouterProvider.otherwise('/home');
}