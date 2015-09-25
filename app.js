var signIn = angular.module('signIn', ['ui.router']);

signIn.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    });

    $stateProvider.state('signin', {
        url:"sign-in",
        templateUrl: "partials.sign-in.html",
        controller: "StudentsCtrl"
    });
});
