angular
	.module('portlandApp', ['ui.router', 'portlandApp.controllers', 'ngMaterial', 'ngAnimate'])
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
		.state('amuse', {
			url: "/amuse",
			templateUrl: "/templates/amuse.html",
			controller: "AmuseController"
		})
		.state('amjal', {
			url: "/amjal",
			templateUrl: "/templates/amjal.html",
			controller: "AmjalController"
		})

		$urlRouterProvider.otherwise('/home');
}