define([
    '../module.js'
], function (controllers) {
    controllers.controller('frameController', ["$scope", "$http", "$controller", "$state",
        function ($scope, $http, $controller, $state) {
            var toggleCanvas = function (value) {
                $scope.offcanvas = value;
            };

            var loadUser = function() {
                $http({
                    method: 'GET',
                    url: '/current/'
                })
                    .then(function successCallback(response) {
                        $scope.currentUser = response.data;
                    }, function errorCallback(response) {
                        console.log(response);
                    });
            };

            $scope.methods = {
                toggleCanvas: toggleCanvas
            };

            $scope.$on('$stateChangeStart', function () {
                $scope.loading = true;
            });
            $scope.$on('$stateChangeSuccess', function () {
                $scope.loading = false;
            });

            $scope.init = function () {
                $controller('frameState', {$scope: $scope});
                loadUser();

                $scope.currentState = $state.current.name;


            };
            $scope.init();
        }]);
});
