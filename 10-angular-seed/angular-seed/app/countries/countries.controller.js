angular
  .module('countries')
  .controller('CountriesController', CountriesController)

CountriesController.$inject = ['countriesResource']

function CountriesController(countriesResource) {
  vm = this

  countriesResource.jsonp({}, countriesSuccess, countriesFailure)

  function countriesSuccess(data) {
    vm.worldBankData = data[1]
  }

  function countriesFailure(error) {
    vm.error = error
  }
}
