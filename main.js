angular.module('lifeCareerPath', ['ngRoute'])
  .controller('mainController', mainController);

  angular.module('lifeCareerPath')
    .config(myRouter);

    myRouter.$inject = ['$routeProvider'];

    function myRouter($routeProvider) {
      $routeProvider
        .when('/', {
                templateUrl: '/templates/home.html'
            })
        .otherwise({
              redirectTo: '/'
          })
    }

  function mainController() {
    var main = this;
  }
