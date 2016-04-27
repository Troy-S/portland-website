angular
<<<<<<< HEAD
	.module('portlandApp', ['ui.router', 'portlandApp.controllers', 'ngMaterial', 'ngAnimate'])
=======
	.module('portlandApp', ['ui.router', 'portlandApp.controllers', 'ngMaterial', 'portlandApp.directives'])
>>>>>>> 410eff62da15e693cef3d8563509c5be5e6cfbed
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
<<<<<<< HEAD
		.state('amjal', {
			url: "/amjal",
			templateUrl: "/templates/amjal.html",
			controller: "AmjalController"
		})
=======
>>>>>>> 410eff62da15e693cef3d8563509c5be5e6cfbed

		$urlRouterProvider.otherwise('/home');
};