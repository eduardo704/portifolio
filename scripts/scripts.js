'use strict';

// Declare app level module which depends on views, and components
var myApp=angular.module('myApp', [
  'ngRoute',
  'myApp.slidesComponent', 
  'ngMaterial',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


myApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        if( angular.isUndefined(input)){
          return;
        }       
        return input.slice(start);
    }
});

'use strict';

angular.module('myApp.slidesComponent', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'views/slides.template.html',
      controller: 'SlidesController'
    });
  }])


  .controller('SlidesController', ['$scope', 'slideService', function ($scope, slideService) {
    $scope.isList=false;
    $scope.numPerPage = 6
    $scope.currentPage = 5
    $scope.filterData = [];

    $scope.setPage = function (pageNo) {
      $scope.page = pageNo;
    };

    slideService.getSlides().then(function (data) {
      $scope.slides = data
      $scope.totalItems = data.length;
      $scope.currentPage = 1;
    })

    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };  

  }]);
'use strict';

(function () {
    var slideService = function ($http) {
        var service = {};

        var size = 4;

        var arrays = []
        //Gets the list of slides parse created at to date
        service.getSlides = function () {
            return $http.get('https://stark-cove-64703.herokuapp.com/slides')
                .then(function (data) {
                    data.data.forEach((element) => {
                        element.createdAt = new Date(element.createdAt);
                    });
                    data.data.sort(function (obj1, obj2) {
                        return obj1.createdAt - obj2.createdAt;
                    });
                    return data.data;
                });
        };
        return service;
    };

    angular.module('myApp.slidesComponent').factory('slideService', slideService);

}());