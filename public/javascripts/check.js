/**
 * Created by Sachini on 12/7/2017.
 */
/**
 * Created by Sachini on 12/7/2017.
 */
"use strict";
app.controller('App-controller-check',function ($scope,$http) {
    $scope.add = function() {
        if ($scope.emailReg != $scope.emailReg2) {
            $scope.IsMatch=true;
            return false;
        }
        $scope.IsMatch=false;
    }
});