/**
 * Created by Administrator on 2016/12/6 0006.
 */
var myCtrl = angular.module('myCtrl',[]);
myCtrl.controller('gifCtrl',['$scope','$http','$timeout',function($scope,$http,$timeout){

    $scope.itmes = [];

    var index = 1;
    $scope.more = function(){



        $http.get('http://route.showapi.com/341-3',{
            params:{
                //下面两个参数是系统必须参数
                'showapi_appid':'28337',
                'showapi_sign':'fd70204f4b9542fa9c564c437b233036',
                'maxResult':10,
                'page':index
            }
        }).success(function(data){
            if(data && data.showapi_res_code ==0){

                    var arr = data.showapi_res_body.contentlist;
                    $scope.items=arr

                //数据加载完停止
                $scope.$broadcast("scroll.infiniteScrollComplete");
            }
        });

    };



    $scope.more();

    //上拉加载更多
    $scope.plus = function(){
        $timeout(function(){
            index++;
            console.log(index);

            $scope.more();
        },1000)
        $timeout.cancel($scope.plus)
    }



}]);

myCtrl.controller('photoCtrl',['$scope','$http','$timeout',function($scope,$http,$timeout){
    $scope.itmes1 = [];

    var index1 = 1;
    $scope.more = function(){



        $http.get('http://route.showapi.com/341-2',{
            params:{
                //下面两个参数是系统必须参数
                'showapi_appid':'28337',
                'showapi_sign':'fd70204f4b9542fa9c564c437b233036',
                'maxResult':10,
                'page':index1
            }
        }).success(function(data){
            if(data && data.showapi_res_code ==0){

                var arr1 = data.showapi_res_body.contentlist;
                $scope.items1=arr1

                //数据加载完停止
                $scope.$broadcast("scroll.infiniteScrollComplete");
            }
        });

    };



    $scope.more();

    //上拉加载更多
    $scope.plus = function(){
        $timeout(function(){
            index1++;
            console.log(index1);

            $scope.more();
        },1000)
        $timeout.cancel($scope.plus)
    }

}]);

myCtrl.controller('textCtrl',['$scope',"$http",'$timeout',function($scope,$http,$timeout){
    $scope.itmes2 = [];

    var index2 = 1;
    $scope.more = function(){



        $http.get('http://route.showapi.com/341-1',{
            params:{
                //下面两个参数是系统必须参数
                'showapi_appid':'28337',
                'showapi_sign':'fd70204f4b9542fa9c564c437b233036',
                'maxResult':20,
                'page':index2
            }
        }).success(function(data){
            if(data && data.showapi_res_code ==0){

                var arr2 = data.showapi_res_body.contentlist;

                $scope.items2=arr2;

                //数据加载完停止
                $scope.$broadcast("scroll.infiniteScrollComplete");
            }
        });

    };



    $scope.more();

    //上拉加载更多
    $scope.plus = function(){
        $timeout(function(){
            index2++;
            console.log(index2);

            $scope.more();
        },1000)
        $timeout.cancel($scope.plus)
    }

}]);

