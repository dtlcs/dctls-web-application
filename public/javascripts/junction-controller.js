/**
 * Created by Sachini on 12/9/2017.
 */

"use strict";
app.controller('App-controller-junction',function ($scope,$http) {
    $scope.newJunction={a:'aa'};
    //Add new Junction
    $scope.addJunction=function () {
        console.log($scope.newJunction);
        $http.post('http://localhost:8080/api/junction/add', $scope.newJunction).then(function (res, err) {
            console.log(res.data);
        }, function (err) {
            console.log("error :" + err);
        });
    };
});

