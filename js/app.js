var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    $scope.change = function() {
        var utcSeconds = parseInt($scope.epoch);
        var d = new Date(0);
        d.setUTCSeconds(utcSeconds);
        $scope.result = d;
    }
});