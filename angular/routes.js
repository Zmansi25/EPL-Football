
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        })
        .when('/allmatches',{
        	templateUrl     : 'views/allmatches.html',
        	controller 		: 'mainController',
        
        })
        .when('/teamstats',{
            templateUrl     : 'views/teamstats.html',
            controller      : 'mainController'
        
        })        
        .when('/teams/:id',{
            templateUrl     : 'views/teams.html',
            controller      : 'mainController',
           
        
        })  
        .when('/match-details/:yearid/:guitarID/:roundsid', {
            templateUrl: 'views/match-details.html',
            controller: 'mainController'
        })
        .when('/ranking',{
            templateUrl     : 'views/rankings.html',
            controller      : 'mainController',
        
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);