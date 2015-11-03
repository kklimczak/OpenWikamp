define([
    '../module.js'
], function (controllers) {
    controllers.controller('frameController', ["$scope", "$http", "$controller", "$state",
        function ($scope, $http, $controller, $state) {
            var toggleCanvas = function (value) {
                $scope.offcanvas = value;
            };

            $scope.methods = {
                toggleCanvas: toggleCanvas
            };

            $scope.init = function () {
                $controller('frameState', {$scope: $scope});

                $scope.currentState = $state.current.name;


            };
            $scope.init();
        }]);
});
