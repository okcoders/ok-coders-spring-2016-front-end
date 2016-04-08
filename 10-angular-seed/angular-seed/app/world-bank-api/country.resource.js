angular
  .module('worldBankApi')
  .factory('countryResource', countriesResource)

countryResource.$inject = ['$resource']

function countryResource($resource) {
  return $resource('http://api.worldbank.org/countries/:id/:indicator', {},
    {
      jsonp: {
        method: 'JSONP',
        params: {prefix: 'JSON_CALLBACK', per_page: 500, format: 'jsonP'},
        isArray: true
      }
    }
  )
}
