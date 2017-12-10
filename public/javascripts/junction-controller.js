/**
 * Created by Sachini on 12/9/2017.
 */

"use strict";
// console.log('aaa');
app.controller('App-controller-junction',function ($scope,$http,$cookieStore) {
    console.log('qwe');
    // $scope.newJunction={
    //     name:'ww',
    //     street:'s',
    //     city:'2e',
    //     province:'ww',
    //     postal_code:'22',
    //     latitude:'2233.4',
    //     longitude:'334.99',
    //     pi_mac:'11s',
    //
    // };

    //Add new Junction
    $scope.add=function () {
        console.log('pppp');
        console.log($scope.newJunction);
        $http.post('http://localhost:8080/api/junction/add', $scope.newJunction).then(function (res, err) {
            console.log(res);
        }, function (err) {
            console.log("error :" + err);
        });
    };
});


