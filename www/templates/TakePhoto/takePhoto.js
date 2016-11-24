angular.module('jido.takePhoto', [])

.controller('takePhotoCtrl', function($scope, $cordovaCamera,$ionicLoading) {

	   $scope.fntakephoto = function () {
       
                var options = {
                    quality: 100,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: false,
                    encodingType: Camera.EncodingType.JPEG,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: true,
                    correctOrientation: true
                };
                $cordovaCamera.getPicture(options).then(function (imageData) {
                     $ionicLoading.show();
                    var image = document.getElementById('myImage');
                    image.src = "data:image/jpeg;base64," + imageData;
                    $scope.Image = imageData;
                     $ionicLoading.hide();
                }, function (err) {
                     $ionicLoading.hide();
                });
                
            };


            $scope.fnUpload  = function()
            {
                alert(JSON.stringify('upload pic'));
                
            }

});
