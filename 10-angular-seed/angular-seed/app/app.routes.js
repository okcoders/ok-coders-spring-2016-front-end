angular
  .module('mySweetApp')
  .config(config)

config.$inject = ['$routeProvider']

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'countries/countries.partial.html',
      controller: 'CountriesController as countries'
    })
    .otherwise({redirectTo: '/'})
}
