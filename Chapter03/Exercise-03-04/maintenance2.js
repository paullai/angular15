angular.module('maintenance', ['ngRoute'])
    .controller('adminCtrl', AdminCtrl)
    .controller('mainCtrl', MainCtrl)
    .controller('locationsCtrl', LocationsCtrl)
    .controller('sitesCtrl', SitesCtrl)
    .factory('currentSpot', currentSpot)
  .config(function ($routeProvider) {
    $routeProvider.when('/locations', {
      templateUrl: 'views/locations.html'
    });
    $routeProvider.when('/sites', {
      templateUrl: 'views/sites.html'
    });
    $routeProvider.otherwise({
      templateUrl: 'views/main.html'
    });
  });

function AdminCtrl($scope) {
}
