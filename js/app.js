/**
 * Created by Administrator on 2016/12/6 0006.
 */


var app = angular.module('myApp',['ionic','ngRoute','myCtrl']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/gif',{
        templateUrl:'view/gif.html',
        controller:'gifCtrl'
    }).when('/photo',{
        templateUrl:'view/photo.html',
        controller:'photoCtrl'
    }).when('/text',{
        templateUrl:'view/text.html',
        controller:'textCtrl'
    });

    $routeProvider.otherwise('/gif')



}])


