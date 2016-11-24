angular.module('jido.login', [])

.controller('loginCtrl', function($scope, $ionicLoading, $http, $ionicPopup, $rootScope, $state, $ionicViewSwitcher) {

    $scope.doLogin = function(form, val) {
        if (form.$valid) {
            var u = val.Uname;
            var p = val.Pword;
            $ionicLoading.show();
            $http.get($rootScope.url + "api/Users?u="+u+"&p="+p+"&empl=false")
                .success(function(data) {
                    if (data.length != 0) {
                        // alert(JSON.stringify(data));
                        $ionicViewSwitcher.nextDirection('forward');
                        localStorage.setItem("UserID", data[0].UserId);
                        localStorage.setItem("Email", data[0].Email);
                        $state.go('app.takePhoto');
                    }
                    else{
                        $ionicPopup.alert({
                            title: 'Login Failed..',
                            template: 'UserName and Password is not Matched.',
                            okType: 'common-btn'
                        }).then(function() {
                            val.Pword = '';
                        });
                    }
                    $ionicLoading.hide();
                }).error(function(data) {
                   console.log('login exception');
                });
        }
    };



});
