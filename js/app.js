var quoteApp = angular.module('quoteApp', []);

quoteApp.controller('RequestQuoteFormCtrl', function($scope, $http) {

	$scope.addNewQuoteRequest = function(){

		var nodeData = {
			'type' : 'quoterequests',
			'title' : {'und' : [{'value' : 'somevalue'}]},
			'address' : {'und' : [{'value' : 'somevalue'}]},
			'Budget' : {'und' : [{'value' : 'somevalue'}]},
			'CateringType' : {'und' : [{'value' : 'somevalue'}]},
			'City' : {'und' : [{'value' : 'somevalue'}]},
			'CuisineType' : {'und' : [{'value' : 'somevalue'}]},
			'Email' : {'und' : [{'value' : 'somevalue@email.com'}]},
			'EventComments' : {'und' : [{'value' : 'somevalue'}]},
			'MealType' : {'und' : [{'value' : 'Some Meal'}]},
			'Name' : {'und' : [{'value' : 'Some Name'}]}
		}
	

	$http({url: 'http://dev-catertoronto.gotpantheon.com/api/quotes-list.json', 
		method: 'POST', data: nodeData}).success(function(data, status){
			console.log('posted');
	});

	};

});

