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