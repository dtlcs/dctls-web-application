/**
 * Created by Sachini on 12/7/2017.
 */
"use strict";
app.controller('App-controller-user',function ($scope,$http) {

    /**bind new user schema to $scope*/
    $scope.newUser={
        fname:'',
        email:'',
        dob:'',
        phone:'',
        nic:'',
        address:'',
        password:'',
    };

    /**bind passwords to $scope*/
    $scope.newLogin={
        password:'',
        confirmPassword:'',
    };


    /**
     * add new admin-user
     */
    $scope.addUser=function () {
        console.log($scope.newUser);
        $http.post('/adminUser', $scope.newUser).then(function (res, err) {
           console.log(res);
        }, function (err) {
            console.log("error :" + err);
        });
    }

    /**
     * check password matching
     */
    $scope.confirmPassword=function () {

    }
});