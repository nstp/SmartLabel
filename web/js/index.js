var app = angular.module('app', ['ngAnimate', 'ngRoute'])
app.controller('ctrl', function($scope) {
    $scope.radius = 100
})
angular.bootstrap('html', ['app'])