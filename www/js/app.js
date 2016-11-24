angular.module('jido', ['ionic', 'pascalprecht.translate','jido.lenguage','ngCordova', 'jido.registration', 'jido.login', 'jido.dashboard','jido.tab', 'jido.takePhoto'])
.run(function($ionicPlatform, $rootScope, $timeout, $state) {
    $ionicPlatform.ready(function() {
        $rootScope.url = 'http://jidobooksdev.azurewebsites.net/';
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }

        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.controller('menuController', function($scope, $translate,$http, $ionicModal, $state, $rootScope, $ionicLoading, $ionicViewSwitcher, $ionicPopup, $ionicHistory, $ionicViewService) {
    // // --------------------- for open partial view --------------------------
    $scope.fnOpenMenu = function(animation) {
        $ionicModal.fromTemplateUrl("templates/popupMenu.html", {
            scope: $scope,
            animation: 'fade-in-scale'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };
    $scope.fnClose = function() {
        $scope.modal.hide();
    }
    //================================== LogOut function============================================
    $scope.fnSignout = function() {
        $scope.modal.hide();
        var confirmPopup = $ionicPopup.confirm({
            title: 'confirmatin',
            template: 'are you sure you want to LogOut ?',
            okType: 'common-btn',
            cancelType: 'common-btn'
        });
        confirmPopup.then(function(res) {
            if (res) {
                
                $ionicLoading.show();
                $ionicViewSwitcher.nextDirection('back');
                $ionicHistory.clearCache();
                $ionicHistory.clearHistory();
                localStorage.clear();
                $state.go('login');
                $ionicLoading.hide();
            } else {
                // console.log('You are not sure');
            }
        })
    }
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(0);
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
    })

    .state('login', {
        url: "/login",
        templateUrl: "templates/Login/login.html",
        controller: 'loginCtrl'
    })


    .state('registration', {
        url: "/registration",
        templateUrl: "templates/Registration/registration.html",
        controller: 'registrationCtrl'
    })

    .state('app.dashboard', {
        url: "/dashboard",
        views: {
            'menuContent': {
                templateUrl: "templates/Dashboard/dashboard.html",
                controller: 'dashboardCtrl'
            }
        }
    })

    .state('app.takePhoto', {
        url: "/takePhoto",
        views: {
            'menuContent': {
                templateUrl: "templates/TakePhoto/takePhoto.html",
                controller: 'takePhotoCtrl'
            }
        }
    })

    .state('app.tab', {
        url: '/tab',
        views: {
            'menuContent': {
                templateUrl: "templates/Tab/tab.html",
                controller: 'tabCtrl'
            }
        }
    })

   ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('registration');
});
