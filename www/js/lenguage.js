angular.module('jido.lenguage', [])
.controller('lenguageCtrl', function($scope,$state,$ionicViewSwitcher,$translate) {
    $scope.ChangeLanguage = function(lang){
		$translate.use(lang);
	}
}) .config(function($stateProvider, $urlRouterProvider, $translateProvider) {
        $translateProvider.translations('en', {
        	lenguage: "English",
            hello_message: "panchal sagar",
            goodbye_message: "Goodbye sagar"
        });
        $translateProvider.translations('gu', {
        	lenguage: "ગુજરાતી",
            hello_message: "પંચાલ સાગર",
            goodbye_message: "આવજો સાગર"
        });
        $translateProvider.translations('hi', {
            lenguage: "हिन्दी ",
            hello_message: "पंचाल सागर",
            goodbye_message: "चलता हु સાગર"
        });
        $translateProvider.preferredLanguage("gu");
        $translateProvider.fallbackLanguage("en");
    });
