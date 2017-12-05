/**
 * Created by Sachini on 12/5/2017.
 */
'use strict';

app.controller('App-controller-map',function ($scope,$http) {
    /**
     * http GET request to get all junction locations
     */
    $http.get('/location').then(function (response) {
        $scope.locations=response.data;
        console.log(response.data);
    });

    var locations=$scope.locations;

    /**
     * function to init  map with marker and infoWindow
     */



});
