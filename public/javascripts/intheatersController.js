/**
 * Created by user1 on 2017/4/28.
 */
var app = angular.module('movie', []);

app.controller('intheatersController', function($scope,$http) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/intheaters'
    }).then(function successCallback(response) {
        $scope.intheaters=response.data;

    }, function errorCallback(response) {
        console.log('«Î«Û ß∞‹');
    });

    $scope.opendetail=function(index){
        location.href = "details/id=" + index;

    }

});


app.controller('comingController',function($scope,$http){
    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/coming'
    }).then(function successCallback(response) {
        $scope.comings=response.data;

    }, function errorCallback(response) {
        console.log('«Î«Û ß∞‹');
    });


    $scope.opendetail=function(index){
        location.href = "details2/id=" + index;

    }

})



app.controller('movielist',function($scope,$http){
    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/intheaters'
    }).then(function successCallback(response) {
        $scope.movies=response.data;

    }, function errorCallback(response) {
        console.log('«Î«Û ß∞‹');
    });

    $scope.opendetail=function(index){
        location.href = "details/id=" + index;

    }

})