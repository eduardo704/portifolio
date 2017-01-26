'use strict';

angular.module('myApp.slidesComponent', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'slides.template.html',
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