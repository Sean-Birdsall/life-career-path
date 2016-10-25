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
        .when('/dash', {
                templateUrl: '/templates/dash.html'
            })
        .when('/path', {
                templateUrl: '/templates/path.html'
        })
        .when('/manage', {
                templateUrl: '/templates/manage.html'
        })
        .otherwise({
              redirectTo: '/'
          })
    }

  function mainController() {
    var main = this;
  }
