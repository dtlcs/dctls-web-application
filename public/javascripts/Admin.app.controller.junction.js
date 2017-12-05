<<<<<<< HEAD
"use strict";

var referesh=function () {
    $scope.junction={}
}

app.controller('App-controller-junction',function ($scope,$http) {
    $scope.junction={
        junction_id:'',
        junction_name:'',
        junction_lane:{
              lane_id:'',
              lane_direction:''
            }
    };

    /*
    * {
        junction_id:'001',
        junction_name:'battramulla-four-way-junction',
        junction_lane:{
              lane_id:'001-1',
              lane_direction:'turn left',
              queue_length:'90'
            }
    * */

    $scope.addJunction=function () {
        console.log($scope.junction);
        $http.post('/junction', $scope.junction).then(function (res, err) {
            console.log(res);
        }, function (err) {
            console.log("error :" + err);
        });
    }


});
=======
"use strict";

var referesh=function () {
    $scope.junction={}
}

app.controller('App-controller-junction',function ($scope,$http) {
    $scope.junction={
        junction_id:'',
        junction_name:'',
        junction_lane:{
              lane_id:'',
              lane_direction:''
            }
    };

    /*
    * {
        junction_id:'001',
        junction_name:'battramulla-four-way-junction',
        junction_lane:{
              lane_id:'001-1',
              lane_direction:'turn left',
              queue_length:'90'
            }
    * */

    $scope.addJunction=function () {
        console.log($scope.junction);
        $http.post('/junction', $scope.junction).then(function (res, err) {
            console.log(res);
        }, function (err) {
            console.log("error :" + err);
        });
    }


});
>>>>>>> 67a00c80c60d9da0fe2b68cf924b17b431dd892d
