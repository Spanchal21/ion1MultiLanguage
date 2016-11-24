angular.module('jido.registration', [])

.controller('registrationCtrl', function($scope,$state,$ionicViewSwitcher) {


    $scope.goBack = function() {
        $state.go('login');
        $ionicViewSwitcher.nextDirection('back');
    }
}) 
