'use strict';

describe('myApp.slidesComponent module', function () {
  var $controller, SlidesController, scope, slideService, ParseServiceMock
  //  beforeEach(angular.mock.module('ui.router'));
  var slides = [{
      "id": "56f137f432fbb67217182785",
      "title": "incididunt amet ad nostrud",
      "thumbnail": "https://placeimg.com/400/400/any",
      "creator": {
        "name": "consectetur laborum",
        "profileUrl": "http://randomprofile.prezi.com/"
      },
      "createdAt": "March 6, 2014"
    },
    {
      "id": "56f137f4d62116d1231786ca",
      "title": "Lorem commodo excepteur minim",
      "thumbnail": "https://placeimg.com/400/400/any",
      "creator": {
        "name": "cupidatat excepteur",
        "profileUrl": "http://randomprofile.prezi.com/"
      },
      "createdAt": "July 31, 2015"
    }
  ]
  beforeEach(angular.mock.module('myApp.slidesComponent'));


  beforeEach(inject(function (_$rootScope_, _$controller_, $q) {
    scope = _$rootScope_.$new();
    $controller = _$controller_;

    ParseServiceMock = {
      getSlides: function () {
        var deferred = $q.defer();
        deferred.resolve(slides);
        return deferred.promise;
      }
    }

    SlidesController = $controller('SlidesController', {
      $scope: scope,
      slideService: ParseServiceMock
    });
  }));

  it('should be defined please....', inject(function ($controller) {
    expect(SlidesController).toBeDefined();
  }));


});