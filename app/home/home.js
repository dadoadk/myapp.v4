app.controller("homeController", ['$scope', '$http', function($scope, $http) {
  $scope.count = 0;
  $scope.incrementCount = function() {
    $scope.count++;
  };

  $scope.sortField = 'population';
  $scope.reverse = true;

  var config = {
    headers: {
      'X-Mashape-Key': 'sao3rivwrimshARDJBu8zZgYBN8Tp14FMGXjsnapUK7QRPCqtV',
      'Accept': 'application/json'
    }
  };

  $http.get("https://restcountries-v1.p.mashape.com/all", config)
    .success(function(data, status, headers, config) {
      console.log(data);
      $scope.countries = data;
      // this callback will be called asynchronously
      // when the response is available
    }).
  error(function(data, status, headers, config) {
    console.log(data);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}]);