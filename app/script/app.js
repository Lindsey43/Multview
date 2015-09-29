'use strict';

// Declare app level module which depends on views, and components
var toDo = angular.module('ToDo', ['ui.router', 'ui.bootstrap', 'ngStorage']);

toDo.config(function ($stateProvider, $urlRouterProvider) {

    
    $stateProvider
        .state('main', {
            url: '/main',
            controller: 'todoController',
            templateUrl: 'views/main.html'
        })

    .state('list-2', {
        url:'/list-2',
        templateUrl: 'views/list-2.html',
        controller: 'List2Ctrl'
        
    })
    .state('list-3',{
        url:'/list-3',
        templateUrl: 'views/list-3.html',
        controller: 'List3Ctrl'
    });
    
     $urlRouterProvider.otherwise( '/main');
    
});
    

