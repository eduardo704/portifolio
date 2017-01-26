'use strict';

describe('myApp module', function () {

    var http, slideServiceMock

    beforeEach(angular.mock.module('myApp.slidesComponent'));

    beforeEach(inject(function (_slideService_) {
   
        slideServiceMock =  _slideService_
    }));

    it('should exist', function () {
        expect(slideServiceMock).toBeDefined();
    });


});