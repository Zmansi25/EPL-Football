
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
            controllerAs    : 'md'


        })
        .when('/allmatches',{
        	templateUrl     : 'views/allmatches.html',
        	controller 		: 'mainController',
            controllerAs    : 'md'
        })
        .when('/teamstats',{
            templateUrl     : 'views/teamstats.html',
            controller: 'matchDetailsController',
            controllerAs    : 'matchdetails'
        })        
        .when('/teams/:teamcode/:teamkey',{
            templateUrl     : 'views/teams.html',
            controller      : 'teamsController',
            controllerAs    : 'team'
           
        
        })  
        .when('/match-details/:date/:team1code/:team2code', {
            templateUrl: 'views/match-details.html',
            controller: 'matchDetailsController',
            controllerAs    : 'matchdetails'

        })
        .when('/partners',{
            templateUrl     : 'views/partners.html',
            controller      : 'teamsController',
            controllerAs    : 'team'
        
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);