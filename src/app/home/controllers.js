(function(){
	'use strict';

	angular.module("home")
			.controller("homeController",homeController);

	function homeController($http){
		var vm = this;

		console.log("home");

		$http.get("/apk/list");


	}

})();