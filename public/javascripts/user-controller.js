/**
 * Created by Sachini on 12/7/2017.
 */

"use strict";
//var tbl= require('usertable');

app.controller('App-controller-user',function ($scope,$http,$cookieStore) { /*,'cookieDetails' $cookieStore*/

    /**store global variables*/
    $scope.global = {};

    var uid = $cookieStore.get('uid');
    $scope.sess_id = null;

    /**bind new user schema to $scope*/
    // $scope.newUser={
    //    name:'',
    //     nic:'',
    //     role_id:'',
    //     email:'',
    //     telephone:'',
    //     street:'',
    //     city:'',
    //     province:'',
    //     postal_code:'',
    //     password:'',
    //     confirmPassword:''
    // };


    /**bind login user data*/
    $scope.newLogin={
        uid:'',
        username:'',
        password:''
    };

    /**bind valid user session data*/
    $scope.sessionUser={
        uid:'',
        fname:'',
        email:'',
        dob:'',
        phone:'',
        nic:'',
        address:'',
    };

    /**bind changed password*/
    $scope.updatePassword={
        newPassword:'',
        confrimNewPassword:''
    };

    $scope.userProfile={
        uid:'',
        fname:'',
        email:'',
        dob:'',
        phone:'',
        nic:'',
        address:''
    };


    //Get all users
    $http.get('http://localhost:8080/api/users/all').then(function (response) {
        console.log(response.data);
        $scope.allUsers=response;
    });

    //Add new admin-user
    $scope.addUser=function () {
        console.log($scope.newUser);
        $http.post('http://localhost:8080/api/user/add', $scope.newUser).then(function (res, err) {
           console.log(res.data);
        }, function (err) {
            console.log("error :" + err);
        });
    };

    //Check password matching
    $scope.confirmPassword=function () {

    };


    //User login -authenticate user and store user session data
    $scope.login=function () {
        console.log($scope.loginUser);
        $http.post('http://localhost:8080/api/user/authenticate/',$scope.loginUser).then(function (response) {
             console.log(response);
            //$cookieStore.put('ex_Id', response.ExId);
           //   /**store login user id in cookie session*/
           // $cookieStore.put('current_id',response.data[0].id);
           //  $scope.global.sess_id=$cookieStore.get('current_id');
           //  console.log( $scope.global.sess_id);
           //  //console.log('login success');

            ///////////////////////////
            // $scope.userProfile.uid=response.data[0].id;
            // $scope.userProfile.fname=response.data[0].first_name;
            // $scope.userProfile.email=response.data[0].email;
            // $scope.userProfile.dob=response.data[0].dob;
            // $scope.userProfile.phone=response.data[0].telephone;
            // $scope.userProfile.nic=response.data[0].nic;
            // $scope.userProfile.address=response.data[0].city;
            ////////////////////////////
        });

    };

    //Get user profile data
    //var current_user=$cookieStore.get('current_id');

   // console.log($scope.global.sess_id);
    //var current_user=$scope.global.sess_id;
    // var current_user=1;
    // $http.get('http://localhost:8080/api/user/'+current_user).then(function (response) {
    //     console.log(response.data[0]);
    //     //$scope.userProfile=response.data[0];
    //     console.log($scope.userProfile);
    //     /**store valid user data into userProfile*/
    //     $scope.userProfile.uid=response.data[0].id;
    //     $scope.userProfile.fname=response.data[0].first_name;
    //     $scope.userProfile.email=response.data[0].email;
    //     $scope.userProfile.dob=response.data[0].dob;
    //     $scope.userProfile.phone=response.data[0].telephone;
    //     $scope.userProfile.nic=response.data[0].nic;
    //     $scope.userProfile.address=response.data[0].city;
    // });

    //Edit user profile
    // $scope.editUser=function () {
    //     //var id=$scope.userProfile.id;
    //
    //     /**store update data- new password data into paramList*/
    //     var paramList={'param1':$scope.userProfile,'param2':$scope.updatePassword};
    //     console.log(paramList);
    //     $http.put('/api/user/update/'+id, paramList).then(function (res, err) {
    //         console.log(res);
    //     }, function (err) {
    //         console.log("error :" + err);
    //     });
    // }
//     $scope.editUser={
//         id:'2',
//         name:'aa',
//         role_id:'22',
//         email:'rty',
//         phone:'456',
//         street:'rrr',
//         city:'rr',
//         province:'rrr',
//         postal_code:'33'
//     };
// console.log($scope.editUser);
//     //function to edit users
//     //$scope.editUser=$scope.allUsers;
//     $scope.editUser=function(){
//         $http.post('http://localhost:8080/api/user/update',$scope.editUser).then(function (response) {
//             console.log(response);
//         });
//     };
});