var app = angular.module('renApp',['ngRoute','ngAnimate']);
app.controller('loginController', ['$rootScope','$scope',function($rootScope,$scope) {
    $scope.pageClass = 'page-home';
    $rootScope.urlflagT="login";
    $("#myCarousel").hide();
}]);

app.controller('registController',['$rootScope','$scope', function($rootScope,$scope) {
    $scope.pageClass = 'page-about';
    $rootScope.urlflagT="regist";
    $("#myCarousel").hide();
    $scope.doIt=function(){
    	alert($scope.username)
	    var formdate = {
	    	"username":$scope.username,
	    	 "password":$scope.password,
	    	 "address":$scope.address,
	    	 "phoneNum":$scope.phoneNum,
	    	 "sex":$scope.sex
	    }
    }
}]);
