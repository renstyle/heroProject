app.config(
	function config($routeProvider){
	$routeProvider.when('/login',{
		templateUrl:'htmls/login.html',
		controller:'loginController'
	})
	.when('/regist',{
		templateUrl:'htmls/regist.html',
		controller:'registController'
	})
});

