var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http) {
  $scope.barcodeAllowed = false;
  $scope.letter = "High";


    $http.get("http://bart.mahendramhatre.com/stations").success(function(result) {
            console.log("Success", result);
            $scope.resultGet = result;
         }).error(function() {
            console.log("error");
        });

        $scope.getStation = function(station) {
              $http.get("http://bart.mahendramhatre.com/station?source="+station).success(function(result) {
                  console.log("Success", result);
                  $scope.resultS = result;
              }).error(function() {
                  console.log("error");
              });
          };


                     $scope.lat1 =  37.765062;
                     $scope.long1 = -122.419694;

                     var cities = [
                         {
                             city : 'SFO',
                             desc : 'This city is live!',
                             lat :  $scope.lat1,
                             long : $scope.long1
                         }
                     ];
                     var mapOptions = {
                         zoom: 15,
                         center: new google.maps.LatLng( $scope.lat1, $scope.long1),
                         mapTypeId: google.maps.MapTypeId.TERRAIN
                     }


                     var marker = "";
                     $scope.map ="";
                     $scope.createMarker = function (){
                         mapOptions.center = new google.maps.LatLng($scope.lat1, $scope.long1);
                         $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
                         marker = new google.maps.Marker({
                             map: $scope.map,
                             position: new google.maps.LatLng($scope.lat1, $scope.long1)

                         });

                     };
                    $scope.change = function(sLat, sLong) {
                      $scope.lat1 = sLat;
                      $scope.long1 = sLong;
                    }
                   $scope.createMarker();


});

app.controller('TabController', function(){
       this.tab = 1;

       this.setTab = function(newValue){
           this.tab = newValue;
       };

       this.isSet = function(tabName){
           return this.tab === tabName;
       };
   });

   app.controller('MapCtrl', function ($scope) {


  });
