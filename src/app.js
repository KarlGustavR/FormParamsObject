angular.module('formParamsApp', [])
  .controller('FormParamsController', ['$scope', function($scope) {
    $scope.showModal = false;
    $scope.paramForm = {};
    $scope.results = {};

    $scope.params = new FormParamsObject({});

    $scope.setParam = function() {
      if ($scope.paramForm.path && $scope.paramForm.value) {
        $scope.params.setObjectProperty($scope.paramForm.path, $scope.paramForm.value);
        console.log(`Set ${$scope.paramForm.path} to ${$scope.paramForm.value}`);
        $scope.paramForm = {};
        $scope.showModal = false;
      }
    };

    $scope.executeAlgorithm = function() {
      $scope.results = $scope.params.getFullObject();
      console.log('Full Object:', $scope.results);
    };
  }]);
