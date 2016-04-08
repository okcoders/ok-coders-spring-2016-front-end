angular
  .module('worldBankApi')
  .factory('countriesResource', countriesResource)

countriesResource.$inject = ['$resource']

function countriesResource($resource) {
  return $resource('http://api.worldbank.org/countries', {},
    {
      jsonp: {
        method: 'JSONP',
        params: {prefix: 'JSON_CALLBACK', per_page: 500, format: 'jsonP'},
        isArray: true
      }
    }
  )
}
